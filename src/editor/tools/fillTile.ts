import { ITool } from "./tool";
import { Viewer } from "../viewer";
import { Tile } from "../tile";
import { Level } from "../level";

export class FillTileTool implements ITool {
    public id = "fillTile"
    public name = "Fill tiles"

    floodFill(
        level: Level, queue: number[][],
        x: number, y: number,
        w: number, h: number,
        refTile: Tile
    ) {
        if (
            x < 0 || y < 0 ||
            x >= w || y >= h ||
            queue.findIndex(
                t => t[0] === x && t[1] === y
            ) !== -1
        ) return

        const tile = level.getTileAt(x, y)

        if (
            (tile && refTile === tile.tile) ||
            (!refTile && !tile)
        ) {
            queue.push([x, y])

            this.floodFill(
                level, queue,
                x - 1, y, w, h,
                refTile
            )
            this.floodFill(
                level, queue,
                x + 1, y, w, h,
                refTile
            )
            this.floodFill(
                level, queue,
                x, y - 1, w, h,
                refTile
            )
            this.floodFill(
                level, queue,
                x, y + 1, w, h,
                refTile
            )
        }
    }

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        if (continuous) return

        const levelDim = context.level.dimensions
        
        let referenceTile: Tile = null
        const referenceInstance = context.level.getTileAt(x, y)
        if (referenceInstance) referenceTile = referenceInstance.tile

        const queue: number[][] = []

        this.floodFill(
            context.level, queue,
            x, y, levelDim.x, levelDim.y,
            referenceTile
        )
        
        queue.forEach(
            coords => {
                context.level.setTileAt(
                    coords[0], coords[1], context.currentTile
                )
            }
        )

        context.render()
    }
}