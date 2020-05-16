import { ITool, ToolType } from "./tool";
import { Viewer } from "../viewer";

export class EraseObjectTool implements ITool {
    public id = "eraseObject"
    public name = "Erase object"
    public type = ToolType.item

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        context.level.deleteItemAt(
            x, y
        )
        context.render()
    }
}