import { app, BrowserWindow } from "electron"
import { join } from "path"

app.on("ready", () => {
    const win = new BrowserWindow(
        {
            title: "xoxo, LevelEditor",
            width: 1280,
            height: 720,

            webPreferences: {
                nodeIntegration: true
            }
        }
    )

    win.loadFile("index.html")
})

app.on("window-all-closed", () => {
    app.quit()
})