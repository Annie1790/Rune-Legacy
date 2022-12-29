import ui from "./ui.js";

class Inventory {
    constructor() {
        this.gold = +ui.gold.innerHTML;
        this.inventorySpace = ui.inventorySpace;
    }

    updateDisplay() {
        ui.gold.innerHTML = this.gold;
    }

    receiveGold(amount) {
        this.gold += amount;
        this.updateDisplay;
    }

    addItem(item, id) {
        const pushedItem = document.createElement(`${item}`);
        pushedItem.src = id;
        this.inventorySpace.appendChild(pushedItem);
    }

}

let player1Inventory = new Inventory()

export default player1Inventory;