import { Level } from "./level"
import { Tile } from "./tile"
import { ITool } from "./tools/tool"
import { DrawTileTool } from "./tools/drawTile"
import { FillTileTool } from "./tools/fillTile"
import { EraseTileTool } from "./tools/eraseTile"
import { SetSpawnPointTool } from "./tools/setSpawnPoint"
import { promisify } from "util"
import { readdir } from "fs"
import { Item, ItemType } from "./item"
import { loadXaxa } from "./xaxa"
import { AddItemTool } from "./tools/addItem"
import { EraseObjectTool } from "./tools/eraseObject"
import { AddOpponentTool } from "./tools/addOpponent"
import { Opponent } from "./opponent"

export class Viewer {
    public grid = true
    public collisionBoxes = true
    public sublevelBounds = true

    public availableTiles: Tile[] = []
    public currentTile: Tile

    public availableItems: Item[] = []
    public currentItem: Item

    public availableOpponents: Opponent[] = []
    public currentOpponent: Opponent

    public tools: ITool[] = [
        new DrawTileTool(),
        new FillTileTool(),
        new EraseTileTool(),

        new SetSpawnPointTool(),

        new AddItemTool(),
        new AddOpponentTool(),
        new EraseObjectTool()
    ]
    public currentTool = this.tools[0]

    public level: Level

    public viewX = 0
    public viewY = 0

    public canvas: HTMLCanvasElement = document.querySelector(
        "canvas"
    )

    loadLevel(level: Level) {
        this.viewX = 0
        this.viewY = 0

        this.level = level

        this.render()
    }

    async loadTiles(): Promise<void> {
        const rd = promisify(readdir)
        const fileList = await rd("res/tiles")

        for (const file of fileList) {
            try {
                this.availableTiles.push(
                    new Tile(
                        file.substring(0, file.length - 4),
                        file.startsWith("w_")
                    )
                )
            } catch(e) {
                console.log("Oops!")
            }
        }
        
        await Promise.all(
            this.availableTiles.map(
                t => t.loadImage()
            )
        )
        this.currentTile = this.availableTiles[0]
    }

    async loadItems(): Promise<void> {
        const itemsData = await loadXaxa("items")
        
        for (const itemData of itemsData) {
            this.availableItems.push(
                new Item(
                    itemData[0],
                    itemData[1],
                    itemData[3],
                    itemData[2] as ItemType,
                    +itemData[4]
                )
            )
        }
        
        await Promise.all(
            this.availableItems.map(
                t => t.loadImage()
            )
        )
        this.currentItem = this.availableItems[0]
    }

    async loadOpponents(): Promise<void> {
        const itemsData = await loadXaxa("opponents")
        
        for (const itemData of itemsData) {
            this.availableOpponents.push(
                new Opponent(
                    itemData[0],
                    itemData[1]
                )
            )
        }
        
        await Promise.all(
            this.availableOpponents.map(
                t => t.loadImage()
            )
        )
        this.currentOpponent = this.availableOpponents[0]
    }

    async load(): Promise<void> {
        await this.loadTiles()
        await this.loadItems()
        await this.loadOpponents()
    }

    render() {
        const rect = document.querySelector("div.canvasContainer").getBoundingClientRect()
        this.canvas.width = rect.width
        this.canvas.height = rect.height

        const viewTileLeft = Math.floor(-this.viewX / 32)
        const viewTileTop = Math.floor(-this.viewY / 32)
        const viewTileRight = Math.ceil((-this.viewX + rect.width) / 32)
        const viewTileBottom = Math.ceil((-this.viewY + rect.height) / 32)

        const ctx = this.canvas.getContext("2d")

        ctx.clearRect(
            0, 0, this.canvas.width, this.canvas.height
        )

        ctx.resetTransform()
        ctx.translate(this.viewX, this.viewY)

        const levelSlices = this.level.slices

        levelSlices.forEach(
            slice => {
                ctx.fillStyle = "rgb(56, 56, 56)"
                ctx.fillRect(
                    320 * slice.x, 320 * slice.y,
                    320, 320
                )
            }
        )
        
        this.level.tiles.forEach(
            instance => {
                if (
                    instance.x < viewTileLeft ||
                    instance.y < viewTileTop ||
                    instance.x > viewTileRight ||
                    instance.y > viewTileBottom
                )
                    return

                ctx.drawImage(
                    instance.tile.tileImage,
                    32 * instance.x,
                    32 * instance.y,
                    32, 32
                )

                if (this.collisionBoxes && instance.tile.collidable) {

                    ctx.beginPath()

                    ctx.rect(
                        32 * instance.x, 32 * instance.y,
                        32, 32
                    )
                    
                    ctx.moveTo(
                        32 * instance.x, 32 * instance.y
                    )
                    ctx.lineTo(
                        32 * instance.x + 32, 32 * instance.y + 32
                    )
                    
                    ctx.moveTo(
                        32 * instance.x + 32, 32 * instance.y
                    )
                    ctx.lineTo(
                        32 * instance.x, 32 * instance.y + 32
                    )

                    ctx.strokeStyle = "#000000"
                    ctx.lineWidth = 2
                    ctx.stroke()

                    ctx.strokeStyle = "#FF00FF"
                    ctx.lineWidth = 1
                    ctx.stroke()
                }
            }
        )

        this.level.items.forEach(
            instance => {
                if (
                    instance.x < viewTileLeft ||
                    instance.y < viewTileTop ||
                    instance.x > viewTileRight ||
                    instance.y > viewTileBottom
                )
                    return

                ctx.drawImage(
                    instance.item.itemImage,
                    32 * instance.x,
                    32 * instance.y,
                    32, 32
                )
            }
        )
        this.level.opponents.forEach(
            instance => {
                if (
                    instance.x < viewTileLeft ||
                    instance.y < viewTileTop ||
                    instance.x > viewTileRight ||
                    instance.y > viewTileBottom
                )
                    return

                ctx.drawImage(
                    instance.opponent.opponentImage,
                    32 * instance.x,
                    32 * instance.y,
                    32, 32
                )
            }
        )

        if (this.grid) {
            ctx.strokeStyle = "#AAAAAA50"
            ctx.lineWidth = 2

            ctx.beginPath()
            for (let x = Math.floor(-this.viewX / 32) * 32; x < this.canvas.width + Math.ceil(-this.viewX / 32) * 32; x += 32) {
                ctx.moveTo(x, -this.viewY)
                ctx.lineTo(x, this.canvas.height - this.viewY) 
            }
            for (let y = Math.floor(-this.viewY / 32) * 32; y < this.canvas.height + Math.ceil(-this.viewY / 32) * 32; y += 32) {
                ctx.moveTo(-this.viewX, y)
                ctx.lineTo(this.canvas.width - this.viewX, y)
            }
            ctx.stroke()
        }

        if (this.sublevelBounds) {
            levelSlices.forEach(
                slice => {
                    ctx.fillStyle = "#fff"
                    ctx.font = "400 13px"
                    ctx.fillText(
                        `[${slice.x}, ${slice.y}]`,
                        320 * slice.x + 8, 320 * slice.y + 20
                    )
    
                    
                    ctx.strokeStyle = "#FFFF00"
                    ctx.lineWidth = 2
                    ctx.strokeRect(
                        320 * slice.x, 320 * slice.y,
                        320, 320
                    )
                }
            )
        }

        ctx.beginPath()
        ctx.arc(
            32 * this.level.spawnX + 16,
            32 * this.level.spawnY + 10,
            6, 0, Math.PI * 2
        )
        ctx.rect(
            32 * this.level.spawnX + 8,
            32 * this.level.spawnY + 16,
            16, 12
        )

        ctx.strokeStyle = "#000000"
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.fillStyle = "#FFFFFF"
        ctx.fill()
    }

    processTool(e: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect()

        const x = Math.floor(
            (e.clientX - rect.x - this.viewX) / 32
        )
        const y = Math.floor(
            (e.clientY - rect.y - this.viewY) / 32
        )

        if (
            e.buttons & 1 ||
            (e.type === "mouseup" && e.buttons & 1)
        ) {
            this.currentTool.process(
                this,
                x, y,
                e.type === "mousemove"
            )
        } else if (e.type === "mousemove" && e.buttons & 4) {
            this.viewX += e.movementX
            this.viewY += e.movementY

            this.render()
        } else {
            const tile = this.level.getTileAt(x, y)
            let tileId = "N/A"
            if (tile) tileId = tile.tile.id

            const subX = Math.floor(x / 10)
            const subY = Math.floor(y / 10)

            document.querySelector(
                "div.viewerCoordinates"
            ).innerHTML = `
                ${tileId}<br>
                X: ${x - subX * 10}<br>
                Y: ${y - subY * 10}<br>
                Sublevel: ${subX}, ${subY}
            `
        }
    }

    setupDOM() {
        this.canvas.addEventListener(
            "mousedown", (e) => this.processTool(e)
        )
        this.canvas.addEventListener(
            "mouseup", (e) => this.processTool(e)
        )
        this.canvas.addEventListener(
            "mousemove", (e) => {
                this.processTool(e)
            }
        )

        const toolbar = document.querySelector("div.toolbar")
        this.tools.forEach(tool => {
            const toolDiv = document.createElement("div")
            toolDiv.classList.add("tool")
            toolDiv.classList.toggle("active", this.currentTool === tool)

            toolDiv.innerHTML = `
                <img src="../res/icons/${tool.id}.svg">
                <p>${tool.name}</p>
            `

            toolDiv.addEventListener("click", () => {
                toolbar.querySelector("div.active").classList.remove("active")
                toolDiv.classList.add("active")

                document.querySelector(`div.tileList.visible`).classList.remove("visible")
                document.querySelector(`div.tileList.${tool.type}`).classList.add("visible")

                this.currentTool = tool
            })

            toolbar.appendChild(toolDiv)
        })

        const tileList = document.querySelector("div.tileList.tiles")
        this.availableTiles.forEach(tile => {
            const tileDiv = document.createElement("div")
            tileDiv.classList.add("tile")
            tileDiv.classList.toggle("active", this.currentTile === tile)

            tileDiv.classList.toggle("floor", tile.id.startsWith("f_"))
            tileDiv.classList.toggle("wall", tile.id.startsWith("w_"))

            tileDiv.innerHTML = `
                <img src="../res/tiles/${tile.id}.png">
                <p>${tile.id}</p>
            `

            tileDiv.addEventListener("click", () => {
                tileList.querySelector("div.active").classList.remove("active")
                tileDiv.classList.add("active")

                this.currentTile = tile
            })

            tileList.appendChild(tileDiv)
        })

        const itemList = document.querySelector("div.tileList.items")
        this.availableItems.forEach(item => {
            const itemDiv = document.createElement("div")
            itemDiv.classList.add("tile")
            itemDiv.classList.toggle("active", this.currentItem === item)

            itemDiv.classList.toggle("attack", item.type === ItemType.attack)
            itemDiv.classList.toggle("defense", item.type === ItemType.defense)
            itemDiv.classList.toggle("health", item.type === ItemType.health)

            itemDiv.innerHTML = `
                <img src="../res/items/${item.imageId}.png">
                <p>${item.name}</p>
            `

            itemDiv.addEventListener("click", () => {
                itemList.querySelector("div.active").classList.remove("active")
                itemDiv.classList.add("active")

                this.currentItem = item
            })

            itemList.appendChild(itemDiv)
        })

        const opponentList = document.querySelector("div.tileList.opponents")
        this.availableOpponents.forEach(opponent => {
            const opponentDiv = document.createElement("div")
            opponentDiv.classList.add("tile")
            opponentDiv.classList.toggle("active", this.currentOpponent === opponent)

            opponentDiv.innerHTML = `
                <img src="../res/opponents/${opponent.id}.png">
                <p>${opponent.name}</p>
            `

            opponentDiv.addEventListener("click", () => {
                opponentList.querySelector("div.active").classList.remove("active")
                opponentDiv.classList.add("active")

                this.currentOpponent = opponent
            })

            opponentList.appendChild(opponentDiv)
        })

        document.querySelector("input#showGrid").addEventListener("input", (e) => {
            const input = e.target as HTMLInputElement

            this.grid = input.checked
            this.render()
        })
        document.querySelector("input#showColliders").addEventListener("input", (e) => {
            const input = e.target as HTMLInputElement

            this.collisionBoxes = input.checked
            this.render()
        })
        document.querySelector("input#showSublevels").addEventListener("input", (e) => {
            const input = e.target as HTMLInputElement

            this.sublevelBounds = input.checked
            this.render()
        })
    }
}