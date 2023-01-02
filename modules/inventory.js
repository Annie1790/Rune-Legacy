import ui from "./ui.js";
import { player1 } from "./player.js";

export class Inventory {
    constructor() {
        this.gold = +ui.gold.innerHTML;
        this.inventorySpace = ui.inventorySpace;
        this.items = [];
    }

    updateDisplay() {
        ui.gold.innerHTML = this.gold;
        console.log(this.items);
    }

    receiveGold(amount) {
        this.gold += amount;
        this.updateDisplay();
    }

    addItem(item) {
        this.inventorySpace.appendChild(item.element);
        this.items.push(item);
        this.updateDisplay();
    }

}

export class InventoryItem {
    constructor(element, weight) {
        this.element = element;
        this.weight = weight;
    }
}

export class Potion extends InventoryItem {
    constructor(imageSrc, effect) {
        const img = document.createElement("img");
        img.src = imageSrc;
        super(img, 10)
    }
}

export class Rune extends InventoryItem {
    constructor(imageSrc, minDamage, maxDamage, description) {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.addEventListener("mousemove", function() {
            getCoordinates(event);
            ui.inventoryTooltip.innerHTML = description;
        })
        player1.minDamage = minDamage;
        player1.maxDamage = maxDamage;
        super(img, 10);
    }
}
function getCoordinates(event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
    if({x,y} !== undefined) {
        console.log({x,y}) 
        /*.style.left = (x - 55)  + "px";
        .style.top = (y = 55) + "px";*/
        ui.inventoryTooltip.style.display = "block";
            ui.inventoryTooltip.position = "absolute";
            
    } else {
        console.log("something wrong")
    }
  }




export let player1Inventory = new Inventory()

