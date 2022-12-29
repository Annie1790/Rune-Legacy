import ui from "./ui.js";

class Inventory {
    constructor() {
        this.gold = +ui.gold.innerHTML;
        this.inventorySpace = ui.inventorySpace;
        this.items = [];
    }

    updateDisplay() {
        ui.gold.innerHTML = this.gold;
    }

    receiveGold(amount) {
        this.gold += amount;
        this.updateDisplay();
    }

    addItem(item) {
        this.inventorySpace.appendChild(item.element);
        this.items.push(item)
    }

}

class InventoryItem {
    constructor(element, weight) {
        this.element = element;
        this.weight = weight;
    }
}

export class Potion extends InventoryItem {
    constructor(imageSrc=`./media/assets/potion1.png`) {
        const img = document.createElement(`img`);
        img.src = imageSrc;
        super(img, 10)
    }
}

let player1Inventory = new Inventory()

export default player1Inventory;