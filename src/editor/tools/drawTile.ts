import { ITool } from "./tool";
import { Viewer } from "../viewer";

export class DrawTileTool implements ITool {
    public id = "drawTile"
    public name = "Draw tile"

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        context.level.setTileAt(
            x, y, context.currentTile
        )
        context.render()
    }
}