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
        public tiles: TileInstance[] = [],
        public spawnX: number,
        public spawnY: number
    ) {}

    get slices(): {
        x: number, y: number
    }[] {
        const sliceStrings: string[] = [
            "0,0" // There's always the top-left slice
        ]

        this.tiles.forEach(
            tile => {
                const sliceString = `${
                    Math.floor(tile.x / 10)
                },${
                    Math.floor(tile.y / 10)
                }`

                if (!sliceStrings.includes(sliceString))
                    sliceStrings.push(sliceString)
            }
        )

        return sliceStrings.map(
            sliceStr => {
                const split = sliceStr.split(",")

                return {
                    x: +split[0],
                    y: +split[1]
                }
            }
        )
    }

    get dimensions(): {
        x: number, y: number
    } {
        const width = Math.max(...this.tiles.map(i => i.x)) + 1
        const height = Math.max(...this.tiles.map(i => i.y)) + 1

        return {
            x: Math.ceil(width / 10) * 10,
            y: Math.ceil(height / 10) * 10,
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
        return JSON.stringify(
            {
                spawn: {
                    x: this.spawnX,
                    y: this.spawnY
                },
                tiles: this.tiles.map(
                    tile => {
                        return {
                            x: tile.x,
                            y: tile.y,
                            id: tile.tile.id
                        }
                    }
                )
            }
        )
    }
}