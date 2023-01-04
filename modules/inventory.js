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
    constructor(imageSrc, description, effect, weight) {
        const img = document.createElement("img");
        super(img, weight, description);
        img.src = imageSrc;
        this.effect = effect;
        activateEffect(img, effect);
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

function activateEffect(item, effect) {
    item.addEventListener("dblclick", function() {
        console.log(player1Inventory.items)
        effect()
        let updatedInventory = removeItemAfterEffect(player1Inventory.items, player1Inventory.items[item])
        console.log(updatedInventory)
        
        
    })
}

function removeItemAfterEffect(array, value) {
   const index = array.indexOf(value);
   if (index > -1) {
    return array.splice(index, 1)
   } else {
    return console.log("wrong")
   }
    
}

export let herbsAndEffects = {
    trurpore: new Herb("./media/assets/trurpore.png", "<div>Trurpore</div> Heal +<strong>3</strong> points.", function(){player1.heal(3)}, 0.1),


}

export let player1Inventory = new Inventory()

