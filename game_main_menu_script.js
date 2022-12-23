class Character {
    constructor() {
        this.name = new URLSearchParams(window.location.search).get("name");
        this.health = +characterHealth.innerHTML;
        this.experience = +characterExperience.innerHTML;
        this.level = +characterLevel.innerHTML;
    }

    heal(amount) {
        this.health += amount;
        this.updateDisplay();
    }

    damage(amount) {
        this.health -= amount;
        this.updateDisplay();
    }

    gainExperience(amount) {
        this.experience += amount;
        if (this.experience >= 10) {
            this.experience = 0;
            this.levelUp();
        }
        this.updateDisplay()
    }

    levelUp() {
        this.level += 1;
        this.updateDisplay();
    }

    get isAlive() {
        if (this.health <= 0) {
            return false;
        } else {
            return true;
        }
    }

    updateDisplay() {
        characterName.innerHTML = this.name;
        characterHealth.innerHTML = this.health;
        characterExperience.innerHTML = this.experience;
        characterLevel.innerHTML = this.level;
    }

}

class Event {
    constructor(name, description, option1, option2) {
        this.name = name;
        this.description = description;
        this.option1 = option1;
        this.option2 = option2;
    }

    updateDisplay() {
        scenarioName.innerHTML = this.name;
        scenarioDescription.innerHTML = this.description;
        option1.innerHTML = this.option1.name;
        option2.innerHTML = this.option2.name;
    }
}

class EventOption {
    constructor(name, actionfun) {
        this.name = name;
        this.actionfun = actionfun;
    }
}


const scenarioName = document.querySelector("[data-scenario-name]");
const scenarioDescription = document.querySelector("[data-scenario-description]");
const option1 = document.querySelector("[data-option-1]");
const option2 = document.querySelector("[data-option-2]");
const continueButton = document.querySelector("#continue");
const characterName = document.querySelector("[data-character-name]");
const characterHealth = document.querySelector("[data-health]");
const characterExperience = document.querySelector("[data-experience]");
const characterLevel = document.querySelector("[data-level]");

continueButton.addEventListener("click", selectEvent)

let player1 = new Character();
let currentEvent = null;

let event1 = new Event("You found a cave...",
    "Would you go in?",
    new EventOption("Yes", function () {
        scenarioDescription.innerHTML = "You found lots of gold and a healing potion! And gained some experience.";
        player1.heal(5);
        player1.gainExperience(3);
    }),
    new EventOption("No", function () {
        player1.gainExperience(2);
        scenarioDescription.innerHTML = "Better to stay away."
        }
    )
);


let event2 = new Event("Will you fight back?",
 "You decide to rest. During the night, someone is trying to attack you.",
  new EventOption("Figt back!", function() {
    player1.damage(2);
    scenarioDescription.innerHTML = "Your opponent is way stronger than you, however you managed to get out the situation with light wounds."
    player1.gainExperience(1);
  }),
new EventOption("Run away.", function() {
    player1.heal(3);
    scenarioDescription.innerHTML = "You examined the situation and you realised it is better to run. You get some experience points. "
    player1.gainExperience(6);
}));




let eventArray = [event1,event2];


function actionButtonClickedforOption1() {
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

function actionButtonClickedforOption2() {
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

option1.addEventListener("click", actionButtonClickedforOption1);
option2.addEventListener("click", actionButtonClickedforOption2);




function appearOptions() {
    option1.style.display = "block";
    option2.style.display = "block";
    continueButton.style.display = "none";
}

function appearContinue() {
    option1.style.display = "none";
    option2.style.display = "none";
    continueButton.style.display = "block";
}


function selectEvent() {
    appearOptions();
    let index = Math.floor(Math.random() * eventArray.length);
    eventArray[index].updateDisplay();
    currentEvent = eventArray[index]
}

window.addEventListener("load", function () {
    const searchParams = new URLSearchParams(window.location.search);
    characterName.innerText = searchParams.get("name")
    selectEvent();
})