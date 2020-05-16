import "./styles/main.scss"
import { Viewer } from "./editor/viewer"
import { Level, TileInstance } from "./editor/level"
import { Tile } from "./editor/tile"
import { writeFileSync, readFileSync } from "fs"

const { Menu, dialog } = require("electron").remote

const viewer = new Viewer()

viewer.load().then(() => {
    viewer.setupDOM()

    const level = new Level(
        viewer,
        [], [],
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
                    label: "Open project",
                    click: () => {
                        dialog.showOpenDialog(
                            {
                                filters: [
                                    {
                                        name: "xoxo-Editor Project",
                                        extensions: ["xexe"]
                                    }
                                ]
                            }
                        ).then((data: any) => {
                            if (data.canceled) return
                            
                            const level = Level.fromFileData(
                                viewer,
                                readFileSync(
                                    data.filePaths[0], "utf-8"
                                )
                            )
                            viewer.loadLevel(level)
                        })
                    }
                },
                {
                    label: "Save project",
                    click: () => {
                        dialog.showSaveDialog(
                            {
                                filters: [
                                    {
                                        name: "xoxo-Editor Project",
                                        extensions: ["xexe"]
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