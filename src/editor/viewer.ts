import { Level } from "./level"

export class Viewer {
    public grid = true
    public collisionBoxes = true
    public effectBoxes = true

    public canvas: HTMLCanvasElement = document.querySelector(
        "main > canvas"
    )

    render(level: Level) {
        this.canvas.width = innerWidth - 97 - 87
        this.canvas.height = innerHeight - 29

        const ctx = this.canvas.getContext("2d")

        level.tiles.forEach(
            instance => {
                ctx.drawImage(
                    instance.tile.tileImage,
                    32 * instance.x,
                    32 * instance.y
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
    }
}