import { Tile } from "./tile";
import { Viewer } from "./viewer";

export class TileInstance {
    constructor(
        public tile: Tile,
        public x: number,
        public y: number
    ) {}
}

export class Level {
    constructor(
        public context: Viewer,
        public id: string,
        public tiles: TileInstance[] = [],
        public spawnX: number,
        public spawnY: number
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

    deleteTileAt(x: number, y: number) {
        const instance = this.getTileAt(x, y)
        if (instance)
            this.tiles.splice(
                this.tiles.indexOf(instance), 1
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

    get fileData(): string {
        const dim = this.dimensions
        const lines: string[] = [
            `Dimensions ${dim.x} ${dim.y}`,
            `SpawnPoint ${this.spawnX} ${this.spawnY}`
        ]

        const tiles: {
            tile: Tile,
            coords: number[]
        }[] = this.context.availableTiles.map(
            t => {
                return {
                    tile: t,
                    coords: []
                }
            }
        )


        this.tiles.forEach(
            instance => {
                const tile = tiles.find(
                    t => t.tile === instance.tile
                )
                tile.coords.push(instance.x, instance.y)
            }
        )

        tiles.filter(t => t.coords.length).forEach(
            t => lines.push(
                `Tile ${t.tile.id} ${t.coords.join(" ")}`
            )
        )

        return lines.join("\r\n")
    }
}