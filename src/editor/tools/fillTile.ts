import { ITool } from "./tool";
import { Viewer } from "../viewer";
import { Tile } from "../tile";

export class FillTileTool implements ITool {
    public id = "fillTile"
    public name = "Fill tiles"

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        if (continuous) return

        const levelDim = context.level.dimensions
        const applyFill: boolean[][] = Array(
            levelDim.x
        ).fill(0).map(
            () => Array(levelDim.y).fill(false)
        )
        
        let referenceTile: Tile = null
        const referenceInstance = context.level.getTileAt(x, y)
        if (referenceInstance) referenceTile = referenceInstance.tile
    }
}