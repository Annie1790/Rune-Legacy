import ui from "./ui.js";
import { characterPortrait } from "./player.js";

class Monster {
    constructor(imageSrc, name, minDamage, maxDamage) {
        const img = document.createElement("img");
        img.src = imageSrc;
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }
}

export function fightScene() {
removeScenarioButtons();
}

function removeScenarioButtons() {
    ui.scenarioName.style.display = "none";
    ui.scenarioDescription.style.display = "none";
    ui.option1.style.display = "none";
    ui.option2.style.display = "none";
    ui.continueButton.style.display = "none";
}

function createScenarioDoms() {
    let playerProfilePicture = player.characterPortrait;
}

let monsters = {
    ratBrigand: new Monster("./media/mobs/rat_folk.jpg", "Rat Brigand", 2, 6),
    bats: new Monster("./media/mobs/bats.jpg", "Bat colony", 1, 3),
    skeleton: new Monster("./media/mobs/skeleton.jpg", "skeleton", 4, 8),
    orcScout: new Monster("./media/mobs/orc.jpeg", "Orc Scout", 6, 12)
}