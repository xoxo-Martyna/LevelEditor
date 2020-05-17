import { ITool, ToolType } from "./tool";
import { Viewer } from "../viewer";
import { Tile } from "../tile";
import { Level } from "../level";

export class FillTileTool implements ITool {
    public id = "fillTile"
    public name = "Fill tiles"
    public type = ToolType.tile

    floodFill(
        level: Level, queue: number[][],
        x: number, y: number,
        left: number, top: number,
        right: number, bottom: number,
        refTile: Tile
    ) {
        if (
            x < left || y < top ||
            x >= right || y >= bottom ||
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
                x - 1, y, left, top, right, bottom,
                refTile
            )
            this.floodFill(
                level, queue,
                x + 1, y, left, top, right, bottom,
                refTile
            )
            this.floodFill(
                level, queue,
                x, y - 1, left, top, right, bottom,
                refTile
            )
            this.floodFill(
                level, queue,
                x, y + 1, left, top, right, bottom,
                refTile
            )
        }
    }

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        if (continuous) return

        const left = Math.floor(x / 10)
        const top = Math.floor(y / 10)
        
        let referenceTile: Tile = null
        const referenceInstance = context.level.getTileAt(x, y)
        if (referenceInstance) referenceTile = referenceInstance.tile

        const queue: number[][] = []

        this.floodFill(
            context.level, queue,
            x, y,
            left * 10, top * 10,
            left * 10 + 10,
            top * 10 + 10,
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