import "./styles/main.scss"
import { Viewer } from "./editor/viewer"
import { Level, TileInstance } from "./editor/level"
import { Tile } from "./editor/tile"

const viewer = new Viewer()
viewer.setupDOM()

viewer.loadTiles().then(() => {
    const level = new Level(
        "testlevel",
        Array(64).fill(0).map(
            (_, i) => {
                const x = i % 8, y = Math.floor(i / 8)

                return new TileInstance(
                    (
                        x === 0 || x === 7 ||
                        y === 0 || y === 7
                    ) ? viewer.availableTiles[1] : viewer.availableTiles[0],
                    x, y
                )
            }
        )
    )
    
    viewer.loadLevel(level)
    window.addEventListener(
        "resize", () => viewer.render()
    )
})

