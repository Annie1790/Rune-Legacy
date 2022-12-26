import ui from "./ui.js";
import player1 from "./player.js";

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

let currentEvent = null;

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

let event2 = new Event("Will you fight back?",
  "You decide to rest. During the night, someone is trying to attack you.",
  new EventOption("Fight back!", function () {
    player1.damage(2);
    ui.scenarioDescription.innerHTML = "Your opponent is way stronger than you, however you managed to get out the situation with light wounds."
    player1.gainExperience(1);
  }),
  new EventOption("Run away.", function () {
    player1.heal(3);
    ui.scenarioDescription.innerHTML = "You examined the situation and you realised it is better to run. You get some experience points. "
    player1.gainExperience(6);
  }));


let eventArray = [event1, event2];



export function selectEvent() {
    appearOptions();
    let index = Math.floor(Math.random() * eventArray.length);
    eventArray[index].updateDisplay();
    currentEvent = eventArray[index]
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
  