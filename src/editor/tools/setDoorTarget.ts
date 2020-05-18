import { ITool, ToolType } from "./tool";
import { Viewer } from "../viewer";
import { Door } from "../door";

export class SetDoorTargetTool implements ITool {
    public id = "setDoorTarget"
    public name = "Set door target"
    public type = ToolType.tile

    public door: Door

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        if (continuous) return

        const tile = context.level.getTileAt(x, y)

        if (!this.door && tile instanceof Door) {
            this.door = tile
        } else if (this.door) {
            this.door.targetX = x
            this.door.targetY = y

            this.door = null
            
            context.render()
        }
    }
}