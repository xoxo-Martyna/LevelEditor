import "./styles/main.scss"
import { Viewer } from "./editor/viewer"
import { Level, TileInstance } from "./editor/level"
import { Tile } from "./editor/tile"

const tiles: Tile[] = [
    new Tile("testgrass"),
    new Tile("testbricks", true)
]

Promise.all(
    tiles.map(t => t.loadImage())
).then(() => {
    const renderer = new Viewer()
    const level = new Level(
        "testlevel",
        Array(64).fill(0).map(
            (_, i) => {
                const x = i % 8, y = Math.floor(i / 8)

                return new TileInstance(
                    (
                        x === 0 || x === 7 ||
                        y === 0 || y === 7
                    ) ? tiles[1] : tiles[0],
                    x, y
                )
            }
        )
    )
    
    renderer.render(level)
    window.addEventListener("resize", () => renderer.render(
        level
    ))
})

