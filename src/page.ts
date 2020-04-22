import "./styles/main.scss"
import { Viewer } from "./editor/viewer"
import { Level, TileInstance } from "./editor/level"
import { Tile } from "./editor/tile"
import { writeFileSync } from "fs"

const { Menu, dialog } = require("electron").remote

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

    viewer.loadLevel(level)
    window.addEventListener(
        "resize", () => viewer.render()
    );

    (window as any).genLevel = () => {
        return level.fileData
    }
})

const menu = Menu.buildFromTemplate(
    [
        {
            type: "submenu",
            label: "File",
            submenu: [
                {
                    label: "Save",
                    click: () => {
                        dialog.showSaveDialog(
                            {
                                filters: [
                                    {
                                        name: "xoxo Level",
                                        extensions: ["xoxo"]
                                    }
                                ]
                            }
                        ).then((data: any) => {
                            if (data.canceled) return

                            writeFileSync(
                                data.filePath,
                                viewer.level.fileData,
                                "utf-8"
                            )
                        })
                    }
                }
            ]
        }
    ]
)

Menu.setApplicationMenu(menu)