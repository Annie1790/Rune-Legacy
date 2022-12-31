import ui from "./ui.js";
import { player1 } from "./player.js";

let currentEventArray = null;
let currentEvent = null;
let currentOnLevelDoneCallback = null;

export function setActiveEvents(eventArray, onLevelDoneCallback) {
    currentEventArray = eventArray;
    currentOnLevelDoneCallback = onLevelDoneCallback;
    selectNextEvent();
}

function selectNextEvent() {
    if (currentEventArray !== null && currentEventArray.length !== 0) {
        currentEvent = currentEventArray.shift();
        currentEvent.updateDisplay();
        appearOptions();
    }
}

function continueButtonClicked() {
    if (currentEventArray !== null && currentEventArray.length !== 0) {
        selectNextEvent()
    } else {
        currentOnLevelDoneCallback();
        currentEvent = null;
        currentEventArray = null;
        currentOnLevelDoneCallback = null;
        ui.continueButton.style.display = "none";
        ui.scenarioName.innerHTML = "Level done!";
        ui.scenarioDescription.innerHTML = "Click on next level!";
        
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

function actionButtonClicked(option) {
    if (!player1.isAlive) {
        window.alert("game over!");
        return;
    }
    appearContinue();
    currentEvent[option].actionfun();

    if (!player1.isAlive) {
        window.alert("game over!");
        return;
    }
}


ui.option1.addEventListener("click", function() {
    actionButtonClicked("option1")
});
ui.option2.addEventListener("click", function() {
    actionButtonClicked("option2")
});

ui.continueButton.addEventListener("click", continueButtonClicked)