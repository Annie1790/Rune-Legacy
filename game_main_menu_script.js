import ui from "./modules/ui.js";
import { Inventory, InventoryItem, player1Inventory, Potion, Rune } from "./modules/inventory.js";
import {player1, showCharacterPortrait } from "./modules/player.js";
import {gameRules } from "./modules/scenario.js";
import { addMapEvents, locationsArray, eklesaArray, tontDungArray } from "./modules/locations.js";

addMapEvents(ui.worldMap, locationsArray);
addMapEvents(ui.eklesaMap, eklesaArray);
addMapEvents(ui.tontDungeon, tontDungArray);



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

