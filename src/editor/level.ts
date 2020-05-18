import { Tile } from "./tile";
import { Viewer } from "./viewer";
import { Item } from "./item";
import { Opponent } from "./opponent";
import { Door } from "./door";

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

export type TileOrDoor = TileInstance | Door

export class Level {
    constructor(
        public context: Viewer,
        public tiles: TileOrDoor[] = [],
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
            if (
                instance instanceof Door && tile.door ||
                instance instanceof TileInstance && !tile.door
            ) {
                instance.tile = tile
            } else {
                this.tiles.splice(
                    this.tiles.findIndex(i => i.x === x && i.y === y), 1
                )
                this.setTileAt(x, y, tile)
            }
        } else {
            this.tiles.push(
                tile.door ? new Door(tile, x, y)
                          : new TileInstance(tile, x, y)
            )
        }
    }

    exportSlice(levelPrefix: string, slice: {
        x: number, y: number
    }): string {
        const tiles: {
            tile: Tile,
            coords: number[]
        }[] = []
        const lines: string[] = []

        const left = slice.x * 10
        const top = slice.y * 10

        lines.push("Dimensions 10 10")

        if (
            this.spawnX >= left ||
            this.spawnY >= top ||
            this.spawnX < left + 10 ||
            this.spawnY < top + 10
        )
            lines.push(`SpawnPoint ${this.spawnX} ${this.spawnY}`)

        this.tiles.forEach(
            tile => {
                if (
                    tile.x < left ||
                    tile.y < top ||
                    tile.x >= left + 10 ||
                    tile.y >= top + 10
                )
                    return

                if (tile instanceof Door) {
                    const targetSuffix = `_${Math.floor(tile.targetX / 10)}_${Math.floor(tile.targetY / 10)}`

                    lines.push(`DoorTile ${tile.tile.id} ${tile.x - left} ${tile.y - top} ${levelPrefix}${targetSuffix} ${tile.targetX - Math.floor(tile.targetX / 10) * 10} ${tile.targetY - Math.floor(tile.targetY / 10) * 10}`)
                } else {
                    const tileref = tiles.find(t => t.tile === tile.tile)
                    if (!tileref) {
                        tiles.push({
                            tile: tile.tile,
                            coords: [tile.x - left, tile.y - top]
                        })
                    } else {
                        tileref.coords.push(tile.x - left, tile.y - top)
                    }
                }
            }
        )

        tiles.forEach(
            tileref => {
                const tileData = `${tileref.tile.id} ${tileref.coords.join(" ")}`

                if (tileref.tile.water) {
                    lines.push(`WaterTile ${tileData}`)
                } else {
                    lines.push(`Tile ${tileData}`)
                }
            }
        )
        lines.push("")

        this.items.forEach(
            item => {
                if (
                    item.x < left ||
                    item.y < top ||
                    item.x >= left + 10 ||
                    item.y >= top + 10
                )
                    return
                
                lines.push(`Item ${item.item.id} ${item.x} ${item.y}`)
            }
        )
        lines.push("")

        this.opponents.forEach(
            opponent => {
                if (
                    opponent.x < left ||
                    opponent.y < top ||
                    opponent.x >= left + 10 ||
                    opponent.y >= top + 10
                )
                    return
                
                lines.push(`Opponent ${opponent.opponent.id} ${opponent.x} ${opponent.y}`)
            }
        )
        lines.push("")
        lines.push("LightSource ambient 1.0 1.0 1.0")

        return lines.join("\n")
    }

    exportSlices(levelPrefix: string): {
        sliceSuffix: string,
        sliceData: string
    }[] {
        console.log(levelPrefix)
        return this.slices.map(
            slice => {
                return {
                    sliceSuffix: `_${slice.x}_${slice.y}.xoxo`,
                    sliceData: this.exportSlice(levelPrefix, slice)
                }
            }
        )
    }

    static fromFileData(context: Viewer, data: string) {
        const json = JSON.parse(data)

        const tiles = json.tiles.map(
            (tilespec: any) => {
                const tile = context.availableTiles.find(t => t.id === tilespec.id)

                if (tilespec.door) {
                    const door = new Door(tile, tilespec.x, tilespec.y)
                    door.targetX = tilespec.targetX
                    door.targetY = tilespec.targetY

                    return door
                } else {
                    return new TileInstance(tile, tilespec.x, tilespec.y)
                }
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
                        if (tile instanceof Door) {
                            return {
                                door: true,
                                x: tile.x,
                                y: tile.y,
                                targetX: tile.targetX,
                                targetY: tile.targetY,
                                id: tile.tile.id
                            }
                        } else {
                            return {
                                x: tile.x,
                                y: tile.y,
                                id: tile.tile.id
                            }
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