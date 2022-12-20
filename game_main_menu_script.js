class Character {
    constructor() {
        this.name = new URLSearchParams(window.location.search).get("name");
        this.health = +characterHealth.innerHTML;
        this.experience = +characterExperience.innerHTML;
        this.level = +characterLevel.innerHTML;
    }

    heal(amount) {
        this.health += amount;
        this.show();
    }

    damage(amount) {
        this.health -= amount;
        this.show();
    }

    show() {
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

    show() {
        scenarioName.innerHTML = this.name;
        scenarioDescription.innerHTML = this.description;
        option1.innerHTML = this.option1;
        option2.innerHTML = this.option2;
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



let event1 = new Event("Alex Returns", "The big t rex farts a big. what would you do?", "run", "stay")
let event2 = new Event("Aniko farts", "Aniko is so digusting she farts a lot. Do you love her?", "yes","no")
let eventArray = [event1,event2];
function selectEvent() {
    let index = Math.floor(Math.random()*eventArray.length);
    eventArray[index].show()
}





window.addEventListener("load", function() {
    const searchParams = new URLSearchParams(window.location.search);
    characterName.innerText = searchParams.get("name")
    selectEvent();
})