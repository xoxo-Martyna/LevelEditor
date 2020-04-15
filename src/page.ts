import "./styles/main.scss"
import { Viewer } from "./editor/viewer"
import { Level, TileInstance } from "./editor/level"
import { Tile } from "./editor/tile"

const viewer = new Viewer()

viewer.loadTiles().then(() => {
    viewer.setupDOM()
    
    const level = new Level(
        viewer,
        "testlevel",
        Array(100).fill(0).map(
            (_, i) => {
                const x = i % 10, y = Math.floor(i / 10)

                return new TileInstance(
                    (
                        x === 0 || x === 9 ||
                        y === 0 || y === 9
                    ) ? viewer.availableTiles[1] : viewer.availableTiles[0],
                    x, y
                )
            }
        ),
        2, 2
    )

    console.log(level.fileData)
    
    viewer.loadLevel(level)
    window.addEventListener(
        "resize", () => viewer.render()
    )
})

