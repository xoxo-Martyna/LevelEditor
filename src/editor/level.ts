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

    get dimensions(): {
        x: number, y: number
    } {
        return {
            x: Math.max(...this.tiles.map(i => i.x)) + 1,
            y: Math.max(...this.tiles.map(i => i.y)) + 1
        }
    }

    getTileAt(x: number, y: number): TileInstance {
        return this.tiles.find(
            t => t.x === x && t.y === y
        )
    }

    setTileAt(x: number, y: number, tile: Tile) {
        const instance = this.getTileAt(x, y)
        if (instance) {
            instance.tile = tile
        } else {
            this.tiles.push(
                new TileInstance(tile, x, y)
            )
        }
    }
}