import ui from "./modules/ui.js";
import { player1,showCharacterPortrait } from "./modules/player.js";
import { actionButtonClickedforOption1, actionButtonClickedforOption2, gameRules } from "./modules/scenario.js";
import { addMapEvents, locationsArray, eklesaArray, tontDungArray } from "./modules/locations.js";
import player1Inventory, { Potion } from "./modules/inventory.js";

addMapEvents(ui.worldMap, locationsArray);
addMapEvents(ui.eklesaMap, eklesaArray);
addMapEvents(ui.tontDungeon, tontDungArray);

ui.option1.addEventListener("click", actionButtonClickedforOption1);
ui.option2.addEventListener("click", actionButtonClickedforOption2);

window.addEventListener("load", function () {
  showCharacterPortrait();
  gameRules(ui.scenarioName,
    ui.scenarioDescription,
    ui.option1,
    ui.option2,
    ui.continueButton
  )
}
)

player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());