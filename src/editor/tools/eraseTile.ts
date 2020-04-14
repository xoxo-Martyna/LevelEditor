import { ITool } from "./tool";
import { Viewer } from "../viewer";

export class EraseTileTool implements ITool {
    public id = "eraseTile"
    public name = "Erase tile"

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        context.level.deleteTileAt(
            x, y
        )
        context.render()
    }
}