import { Viewer } from "../viewer";

export enum ToolType {
    tile = "tiles",
    item = "items"
}

export interface ITool {
    id: string
    name: string
    type: ToolType

    process: (context: Viewer, x: number, y: number, continuous: boolean) => void
}