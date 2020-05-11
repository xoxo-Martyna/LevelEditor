import { Level } from "./level"
import { Tile } from "./tile"
import { ITool } from "./tools/tool"
import { DrawTileTool } from "./tools/drawTile"
import { FillTileTool } from "./tools/fillTile"
import { EraseTileTool } from "./tools/eraseTile"
import { SetSpawnPointTool } from "./tools/setSpawnPoint"
import { promisify } from "util"
import { readdir } from "fs"

export class Viewer {
    public grid = true
    public collisionBoxes = true

    public availableTiles: Tile[] = []
    public currentTile: Tile

    public tools: ITool[] = [
        new DrawTileTool(),
        new FillTileTool(),
        new EraseTileTool(),

        new SetSpawnPointTool()
    ]
    public currentTool = this.tools[0]

    public level: Level

    public canvas: HTMLCanvasElement = document.querySelector(
        "canvas"
    )

    loadLevel(level: Level) {
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

    render() {
        const rect = document.querySelector("div.canvasContainer").getBoundingClientRect()
        this.canvas.width = rect.width
        this.canvas.height = rect.height

        const ctx = this.canvas.getContext("2d")

        ctx.clearRect(
            0, 0, this.canvas.width, this.canvas.height
        )

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

        if (this.grid) {
            ctx.strokeStyle = "#AAAAAA50"
            ctx.lineWidth = 2

            ctx.beginPath()
            for (let x = 32; x < this.canvas.width; x += 32) {
                ctx.moveTo(x, 0)
                ctx.lineTo(x, this.canvas.height)
            }
            for (let y = 32; y < this.canvas.height; y += 32) {
                ctx.moveTo(0, y)
                ctx.lineTo(this.canvas.width, y)
            }
            ctx.stroke()
        }

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
            (e.clientX - rect.x) / 32
        )
        const y = Math.floor(
            (e.clientY - rect.y) / 32
        )

        if (e.buttons & 1 || e.type === "mouseup") {
            this.currentTool.process(
                this,
                x, y,
                e.type === "mousemove"
            )
        } else {
            const tile = this.level.getTileAt(x, y)
            let tileId = "N/A"
            if (tile) tileId = tile.tile.id

            document.querySelector(
                "div.viewerCoordinates"
            ).innerHTML = `
                ${tileId}<br>
                X: ${x}<br>
                Y: ${y}<br>
                Sublevel: ${Math.floor(x / 10)}, ${Math.floor(y / 10)}
            `
        }
    }

    setupDOM() {
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

                this.currentTool = tool
            })

            toolbar.appendChild(toolDiv)
        })

        const tilebar = document.querySelector("div.tileList")
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
                tilebar.querySelector("div.active").classList.remove("active")
                tileDiv.classList.add("active")

                this.currentTile = tile
            })

            tilebar.appendChild(tileDiv)
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
    }
}