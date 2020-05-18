export class Tile {
    public tileImage: HTMLImageElement

    constructor(
        public id: string,
        public collidable = false,
        public water = false,
        public door = false
    ) {}

    loadImage(): Promise<void> {
        this.tileImage = new Image()

        return new Promise(
            (resolve, reject) => {
                this.tileImage.addEventListener("load", () => {
                    resolve()
                })

                this.tileImage.src = `../res/tiles/${this.id}.png`
            }
        )
    }
}
