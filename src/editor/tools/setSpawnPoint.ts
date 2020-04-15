import { ITool } from "./tool";
import { Viewer } from "../viewer";

export class SetSpawnPointTool implements ITool {
    public id = "setSpawnPoint"
    public name = "Set spawn point"

    process(
        context: Viewer, x: number, y: number, continuous: boolean
    ) {
        const dims = context.level.dimensions
        if (x >= dims.x || y >= dims.y) return
        
        context.level.spawnX = x
        context.level.spawnY = y
        context.render()
    }
}