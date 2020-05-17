export class Opponent {
    public opponentImage: HTMLImageElement

    constructor(
        public id: string,
        public name: string
    ) {}

    loadImage(): Promise<void> {
        this.opponentImage = new Image()

        return new Promise(
            (resolve, reject) => {
                this.opponentImage.addEventListener("load", () => {
                    resolve()
                })

                this.opponentImage.src = `../res/opponents/${this.id}.png`
            }
        )
    }
}