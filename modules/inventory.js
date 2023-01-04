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
    constructor(element, weight, description) {
        this.element = element;
        this.weight = weight;
        this.description = description;
        inventoryTooltipShow(element, description)
    }


}

export class Potion extends InventoryItem {
    constructor(imageSrc, effect, description, weight) {
        const img = document.createElement("img");
        img.src = imageSrc;
        super(img, weight, description);
        this.effect = effect;
    }
}

export class Rune extends InventoryItem {
    constructor(imageSrc, minDamage, maxDamage, description, weight) {
        const img = document.createElement("img");
        super(img, weight, description);
        img.src = imageSrc;
        player1.minDamage = minDamage;
        player1.maxDamage = maxDamage;
    }
}
//separate for later
export class Herb extends InventoryItem {
    constructor(imageSrc, description, weight) {
        const img = document.createElement("img");
        super(img, weight, description);
        img.src = imageSrc;
        getItemEffect(img, herbEffects.trurpore)
    }
}

function inventoryTooltipShow(item, description) {
    item.addEventListener("mousemove", function (event) {
        let rectangle = event.target.getBoundingClientRect();
        const x = event.clientX - rectangle.left;
        const y = event.clientY - rectangle.top;
            ui.inventoryTooltip.style.display = "block";
            ui.inventoryTooltip.style.position = "absolute";
            ui.inventoryTooltip.style.left = `${x - 40}px`;
            ui.inventoryTooltip.style.top = `${y - 40}px`
            ui.inventoryTooltip.innerHTML = description;
            console.log("in")
        } )

    item.addEventListener("mouseleave", function() {
        ui.inventoryTooltip.style.display = "none";
        console.log("out")
    })
}

function getItemEffect(item, objectValue) {
    item.addEventListener("dblclick", function() {
        objectValue.value
        console.log(objectValue)
    })
}

export let player1Inventory = new Inventory()

let herbEffects = {
    trurpore: player1.heal(3),
}