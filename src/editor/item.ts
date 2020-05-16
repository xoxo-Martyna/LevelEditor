export enum ItemType {
    attack = "attack",
    health = "health",
    defense = "defense"
}

export class Item {
    public itemImage: HTMLImageElement

    constructor(
        public id: string,
        public imageId: string,
        public name: string,
        public type: ItemType,
        public points: number
    ) {}

    loadImage(): Promise<void> {
        this.itemImage = new Image()

        return new Promise(
            (resolve, reject) => {
                this.itemImage.addEventListener("load", () => {
                    resolve()
                })

                this.itemImage.src = `../res/items/${this.imageId}.png`
            }
        )
    }
}