import { Viewer } from "../viewer";

export interface ITool {
    id: string
    name: string

    process: (context: Viewer, x: number, y: number, continuous: boolean) => void
}