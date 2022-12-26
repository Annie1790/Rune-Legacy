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
const continueButton = document.querySelector("#continue-button");
const characterName = document.querySelector("[data-character-name]");
const characterHealth = document.querySelector("[data-health]");
const characterExperience = document.querySelector("[data-experience]");
const characterLevel = document.querySelector("[data-level]");

const map = document.querySelector("[data-world-map]");
const tooltipField = document.querySelector("[data-tooltip-field]");

const canalOutpost =
{
  topLeft: {
    x: 418,
    y: 520,
  },
  bottomRight: {
    x: 597,
    y: 557,
  },
  action: function () {
    console.log("canal Outpost");
  },

  tooltipText: "Canal Outpost lays next to the river Danube along with many monstrous mountains. It is also home to many monsters. Better to come prepared!",
};

const Eklesa =
{
  topLeft: {
    x: 333,
    y: 293,
  },
  bottomRight: {
    x: 415,
    y: 315,
  },
  action: function () {
    console.log("Eklesa");
  },

  tooltipText: "Despite its strengths and weaknesses, Eklesa is most likely headed towards a prosperous future by its famous traders. However, around the city, the swamps are dangerous. This remains to be seen."
};

const magicForest =
{
  topLeft: {
    x: 164,
    y: 115,
  },
  bottomRight: {
    x: 333,
    y: 135,
  },
  action: function () {
    console.log("magic forest");
  },

  tooltipText: "Place of many secrets. People avoid this place, but no one knows why."
};

const Onavale =
{
  topLeft: {
    x: 101,
    y: 190,
  },
  bottomRight: {
    x: 205,
    y: 210,
  },
  action: function () {
    console.log("Onavale");
  },

  tooltipText: "Onavale is the capital of the island. The town has a healthy economy which is mainly supported by mining, leatherworking and smithing. The main attraction is the watchtower, which was built centruies ago."
};

const beastField =
{
  topLeft: {
    x: 153,
    y: 386,
  },
  bottomRight: {
    x: 300,
    y: 409,
  },
  action: function () {
    console.log("beast field");
  },

  tooltipText: "A messy field of grass is bordered by thriving hedges, bushes, and shrubs. A variety of beastly noises, predominantly those of birds and insects, resonated through the air, and were accompanied by the barrage of noise coming from a dungeon in the distance. "
};

const Tont =
{
  topLeft: {
    x: 357,
    y: 623,
  },
  bottomRight: {
    x: 422,
    y: 643,
  },
  action: function () {
    console.log("Tont");
  },

  tooltipText: "Tont is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. On the other hand, this is the home of sand people."
};

const locationsArray = [canalOutpost, Eklesa, magicForest, Onavale, beastField, Tont];



map.addEventListener("click", function (event) {
  let rectangle = event.target.getBoundingClientRect();
  const x = event.clientX - rectangle.left;
  const y = event.clientY - rectangle.top;

  onMapClicked({ x, y })
})

map.addEventListener("mousemove", function (event) {
  let rectangle = event.target.getBoundingClientRect();
  const x = event.clientX - rectangle.left;
  const y = event.clientY - rectangle.top;
  console.log(event)

  if (findAreaByPoint({ x, y }) !== undefined) {
    event.target.style.cursor = "pointer";
    onMapHovered({ x, y }, { x: event.clientX, y: event.clientY });
  } else {
    event.target.style.cursor = "default";
    tooltipField.style.display = "none";
  }
})

function findAreaByPoint(point) {
  return locationsArray.find((mapArea) => {
    return (
      mapArea.topLeft.x <= point.x &&
      mapArea.bottomRight.x >= point.x &&
      mapArea.topLeft.y <= point.y &&
      mapArea.bottomRight.y >= point.y
    );
  });
}

function onMapClicked(point) {
  console.log(point)
  const area = findAreaByPoint(point);
  if (area !== undefined) {
    area.action();
  }
}

function onMapHovered(point, clientPoint) {
  const area = findAreaByPoint(point);
  if (area !== undefined) {

    tooltipField.style.display = "block";
    tooltipField.style.position = "absolute";
    tooltipField.style.left = `${clientPoint.x-100}px`;
    tooltipField.style.top = `${clientPoint.y + 20}px`;
    tooltipField.innerHTML = area.tooltipText;
  }
}

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
  new EventOption("Fight back!", function () {
    player1.damage(2);
    scenarioDescription.innerHTML = "Your opponent is way stronger than you, however you managed to get out the situation with light wounds."
    player1.gainExperience(1);
  }),
  new EventOption("Run away.", function () {
    player1.heal(3);
    scenarioDescription.innerHTML = "You examined the situation and you realised it is better to run. You get some experience points. "
    player1.gainExperience(6);
  }));




let eventArray = [event1, event2];


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