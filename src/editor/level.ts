import { Tile } from "./tile";
import { Viewer } from "./viewer";
import { Item } from "./item";
import { Opponent } from "./opponent";

export class TileInstance {
    constructor(
        public tile: Tile,
        public x: number,
        public y: number
    ) {}
}

export class ItemInstance {
    constructor(
        public item: Item,
        public x: number,
        public y: number
    ) {}
}

export class OpponentInstance {
    constructor(
        public opponent: Opponent,
        public x: number,
        public y: number
    ) {}
}

export class Level {
    constructor(
        public context: Viewer,
        public tiles: TileInstance[] = [],
        public items: ItemInstance[] = [],
        public opponents: OpponentInstance[] = [],
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

    getOpponentAt(x: number, y: number): OpponentInstance {
        return this.opponents.find(
            t => t.x === x && t.y === y
        )
    }

    deleteOpponentAt(x: number, y: number) {
        const instance = this.getOpponentAt(x, y)
        if (instance)
            this.opponents.splice(
                this.opponents.indexOf(instance), 1
            )
    }

    setOpponentAt(x: number, y: number, opponent: Opponent) {
        const instance = this.getOpponentAt(x, y)
        if (instance) {
            instance.opponent = opponent
        } else {
            this.opponents.push(
                new OpponentInstance(opponent, x, y)
            )
        }
    }

    getItemAt(x: number, y: number): ItemInstance {
        return this.items.find(
            t => t.x === x && t.y === y
        )
    }

    deleteItemAt(x: number, y: number) {
        const instance = this.getItemAt(x, y)
        if (instance)
            this.items.splice(
                this.items.indexOf(instance), 1
            )
    }

    setItemAt(x: number, y: number, item: Item) {
        const instance = this.getItemAt(x, y)
        if (instance) {
            instance.item = item
        } else {
            this.items.push(
                new ItemInstance(item, x, y)
            )
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

    static fromFileData(context: Viewer, data: string) {
        const json = JSON.parse(data)

        const tiles = json.tiles.map(
            (tilespec: any) => {
                const tile = context.availableTiles.find(t => t.id === tilespec.id)

                return new TileInstance(tile, tilespec.x, tilespec.y)
            }
        )
        const items = json.items.map(
            (itemspec: any) => {
                const item = context.availableItems.find(i => i.id === itemspec.id)

                return new ItemInstance(item, itemspec.x, itemspec.y)
            }
        )
        const opponents = json.opponents.map(
            (oppspec: any) => {
                const opponent = context.availableOpponents.find(i => i.id === oppspec.id)

                return new OpponentInstance(opponent, oppspec.x, oppspec.y)
            }
        )

        return new Level(
            context, tiles, items, opponents,
            json.spawn.x, json.spawn.y
        )
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
                ),
                items: this.items.map(
                    item => {
                        return {
                            x: item.x,
                            y: item.y,
                            id: item.item.id
                        }
                    }
                ),
                opponents: this.opponents.map(
                    opponent => {
                        return {
                            x: opponent.x,
                            y: opponent.y,
                            id: opponent.opponent.id
                        }
                    }
                )
            }
        )
    }
}