class Character {
    constructor() {
        this.name = new URLSearchParams(window.location.search).get("name");
        this.health = +characterHealth.innerHTML;
        this.experience = +characterExperience.innerHTML;
        this.level = +characterLevel.innerHTML;
    }


}

class Scenario {
    constructor(scenario) {
        this.scenario = scenario;
    }

    switch (scenario) {
        case first: 
        
    }
}


const scenarioName = document.querySelector("[data-scenario-name]");
const scenarioDescription = document.querySelector("[data-scenario-description]");
const option1 = document.querySelector("[data-option-1]");
const option2 = document.querySelector("[data-option-2]");
const characterName = document.querySelector("[data-character-name]");
const characterHealth = document.querySelector("[data-health]");
const characterExperience = document.querySelector("[data-experience]");
const characterLevel = document.querySelector("[data-level]");

let player1 = new Character()

window.addEventListener("load", function() {
    const searchParams = new URLSearchParams(window.location.search);
    characterName.innerText = searchParams.get("name")
})