import { ITool, ToolType } from "./tool";
import { Viewer } from "../viewer";

export class SetSpawnPointTool implements ITool {
    public id = "setSpawnPoint"
    public name = "Set spawn point"
    public type = ToolType.tile

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        const dims = context.level.dimensions
        if (x >= dims.x || y >= dims.y) return

        const tile = context.level.getTileAt(x, y)

        if (!tile || tile.tile.collidable) return
        
        context.level.spawnX = x
        context.level.spawnY = y
        context.render()
    }
}