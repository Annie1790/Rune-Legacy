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
        inventoryTooltipShow(element, description);
    }


}

export class Potion extends InventoryItem {
    constructor(imageSrc, description, effect, weight) {
        const img = document.createElement("img");
        super(img, weight, description);
        img.src = imageSrc;
        this.effect = effect;
        activateEffect(img, effect, img);
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
    constructor(imageSrc, description, effect, weight) {
        const img = document.createElement("img");
        super(img, weight, description);
        img.src = imageSrc;
        this.effect = effect;
        activateEffect(img, effect, img);
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

function activateEffect(item, effect, domObject) {
    item.addEventListener("dblclick", function() {
        console.log(player1Inventory.items)
        effect()
        removeItemAfterEffect(player1Inventory.items, item);
        console.log(player1Inventory.items)
        domObject.remove();
    })
}

function removeItemAfterEffect(array, value) {
   const index = array.indexOf(value);
   (array.splice(index,1));
}
//imageSrc, description, effect, weight
export let herbsAndEffects = {
    trurpore: new Herb("./media/assets/trurpore.png", "Trurpore. +3HP, +2EXP", function(){player1.heal(3); player1.gainExperience(2)}, 0.1),
    coccoraHat: new Herb("./media/assets/coccora_hat.png", "Coccora Hat. -2HP, +5EXP", function() { player1.damage(2), player1.gainExperience(5), 0.1} )
}
//imageSrc, minDamage, maxDamage, description, weight
export let runes = {
    smallRuneOfFireBolt: new Rune("./media/assets/rune1.png", 2, 4, "Small Rune of Firebolt 2-4DMG", 2),
}
//imageSrc, description, effect, weight
export let potions = {
    minorHealingPotion: new Potion("./media/assets/potion_of_minor_health.png", "Potion of Minor Healing +10HP", function() {player1.heal(10), 0.5})
}

export let player1Inventory = new Inventory()

