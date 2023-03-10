///Ui elements for game main menu html
const ui = {
    scenarioName: document.querySelector("[data-scenario-name]"),
    scenarioDescription: document.querySelector("[data-scenario-description]"),
    option1: document.querySelector("[data-option-1]"),
    option2: document.querySelector("[data-option-2]"),
    continueButton: document.querySelector("[data-continue]"),
    characterName: document.querySelector("[data-character-name]"),
    characterHealth: document.querySelector("[data-health]"),
    characterExperience: document.querySelector("[data-experience]"),
    characterLevel: document.querySelector("[data-level]"),
    worldMap: document.querySelector("[data-world-map]"),
    eklesaMap: document.querySelector("[data-eklesa-map]"),
    tontDungeon: document.querySelector("[data-Tont-dungeon]"),
    tooltipField: document.querySelector("[data-tooltip-field]"),
    malePortrait: document.querySelectorAll(".portrait-male"),
    femalePortrait: document.querySelectorAll(".portrait-female"),
    inventorySpace: document.querySelector("[data-inventory-space]"),
    gold: document.querySelector("[data-gold]"),
    inventoryTooltip: document.querySelector("[data-inventory-tooltip]"),
    minDamage: document.querySelector("[data-min-damage]"),
    maxDamage: document.querySelector("[data-max-damage]"),
    healthDisplay: document.querySelector("[data-health-combat-display]")
}
export default ui;