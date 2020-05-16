import { ITool, ToolType } from "./tool";
import { Viewer } from "../viewer";

export class AddItemTool implements ITool {
    public id = "addItem"
    public name = "Place item"
    public type = ToolType.item

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        context.level.setItemAt(
            x, y, context.currentItem
        )
        context.render()
    }
}