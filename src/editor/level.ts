import { Tile } from "./tile";

export class TileInstance {
    constructor(
        public tile: Tile,
        public x: number,
        public y: number
    ) {}
}

export class Level {
    constructor(
        public id: string,
        public tiles: TileInstance[] = []
    ) {}

    tileAt(x: number, y: number): TileInstance {
        return this.tiles.find(
            t => t.x === x && t.y === y
        )
    }
}