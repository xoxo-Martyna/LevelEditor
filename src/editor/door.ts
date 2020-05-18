import { Tile } from "./tile"

export class Door {
    public targetX: number
    public targetY: number

    constructor(
        public tile: Tile,
        public x: number,
        public y: number
    ) {
        this.targetX = x
        this.targetY = y
    }
}