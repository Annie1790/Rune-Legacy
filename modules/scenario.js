import ui from "./ui.js";
import player1 from "./player.js";
import player1Inventory from "./inventory.js";

class Event {
    constructor(name, description, option1, option2) {
        this.name = name;
        this.description = description;
        this.option1 = option1;
        this.option2 = option2;
    }

    updateDisplay() {
        ui.scenarioName.innerHTML = this.name;
        ui.scenarioDescription.innerHTML = this.description;
        ui.option1.innerHTML = this.option1.name;
        ui.option2.innerHTML = this.option2.name;
    }
}

class EventOption {
    constructor(name, actionfun) {
        this.name = name;
        this.actionfun = actionfun;
    }
}

export let currentEvent = null;

let event1 = new Event("You found a cave...",
    "Would you go in?",
    new EventOption("Yes", function () {
        ui.scenarioDescription.innerHTML = "You found lots of gold and a healing potion! And gained some experience.";
        player1.heal(5);
        player1.gainExperience(3);
    }),
    new EventOption("No", function () {
        player1.gainExperience(2);
        ui.scenarioDescription.innerHTML = "Better to stay away."
    }
    )
);
let tDLvl1 = new Event("The entarance of Tont valley...",
"Soft, quiet sobs can be heard as you fall to a vibrant circular room, sand bricks cover the walls. The fractured floor is littered with stones and large rubble. A single lantern can be found in the center of the room. It looks like someone been there before. You don't seem to find any way to the next room. ",
new EventOption("Pick up the lantern", function () {
    ui.scenarioDescription.innerHTML = "You decide to pick up the lantern, and you hear a click. It was a trap set. An arrow hit your leg.";
    player1.damage(5);
    player1.gainExperience(1);
}),
new EventOption("Try to find a switch", function () {
    player1.gainExperience(2);
    player1Inventory.receiveGold(30);
    ui.scenarioDescription.innerHTML = "Took you a bit of time, but you found a switch to the next room. You found some gold and gained experience!"
}
)
);




let tontDungArray = [tDLvl1];


export let eventArray = [tontDungArray];


export function selectEvent(array) {
    appearOptions();
    let index = Math.floor(Math.random() * array.length);
    array[index].updateDisplay();
    currentEvent = array[index];
  }



  export function actionButtonClickedforOption1() {
    if (!player1.isAlive) {
      window.alert("game over!");
      return;
    }
    appearContinue();
    currentEvent.option1.actionfun();
  
    if (!player1.isAlive) {
      window.alert("game over!");
      return;
    }
  }
  
 export function actionButtonClickedforOption2() {
    if (!player1.isAlive) {
      window.alert("game over!");
      return;
    }
    appearContinue();
    currentEvent.option2.actionfun();
  
    if (!player1.isAlive) {
      window.alert("game over!");
      return;
    }
  }


function appearContinue() {
  ui.option1.style.display = "none";
  ui.option2.style.display = "none";
  ui.continueButton.style.display = "block";
}

function appearOptions() {
    ui.option1.style.display = "block";
    ui.option2.style.display = "block";
    ui.continueButton.style.display = "none";
  }
  
export function gameRules(header, paragraph, button1, button2,contButton) {
  header.innerHTML = "Game Rules";
  paragraph.innerHTML = "<h2>The hero is awaken....</h2> <p>Each location will have different scenarios, for instance dungeons, puzzles, and fight scenes. Your job is to clear all levels and reach the final boss.</p> <p>The map on your left consist the places you can move to. To get back to main map, simply click on the compasses.</p> <p>Dungeons always start at level 1. Simply click on the numbers.</p> <p>On your right, there are health, level, experience points. Gain more experience to level up and unlock more features.</p> <p>On the bottom, you can find the inventory. In the future, you can loot certain things (swords, potions, and of course, runes) which you can also sell in the village of Eklesa.</p> <p>Make sure to loot as much runes as you can. They will be beneficial on your journey.</p> <p>If you enjoyed the game, make sure to leave a review by e-mail: budayaniko@outook.com</p>";
  button1.style.display = "none";
  button2.style.display = "none";
  contButton.style.display = "none";
}