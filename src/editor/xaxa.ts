import { promisify } from "util";
import { readFile } from "fs";

const readFileAsync = promisify(readFile)

export async function loadXaxa(file: string): Promise<string[][]> {
    const data: string = await readFileAsync(
        `res/${file}.xaxa`, "utf-8"
    )
    const items: string[][] = []
    
    data.split(/\r?\n/).forEach(item => {
        if (item.startsWith("//")) return
        items.push(
            item.split("|")
        )
    })

    return items
}