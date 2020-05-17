import { ITool, ToolType } from "./tool";
import { Viewer } from "../viewer";

export class AddOpponentTool implements ITool {
    public id = "addOpponent"
    public name = "Place opponent"
    public type = ToolType.opponent

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        context.level.setOpponentAt(
            x, y, context.currentOpponent
        )
        context.render()
    }
}