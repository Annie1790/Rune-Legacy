import ui from "./modules/ui.js";
import { selectEvent, actionButtonClickedforOption1, actionButtonClickedforOption2} from "./modules/scenario.js";

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



ui.map.addEventListener("click", function (event) {
  let rectangle = event.target.getBoundingClientRect();
  const x = event.clientX - rectangle.left;
  const y = event.clientY - rectangle.top;

  onMapClicked({ x, y })
})

ui.map.addEventListener("mousemove", function (event) {
  let rectangle = event.target.getBoundingClientRect();
  const x = event.clientX - rectangle.left;
  const y = event.clientY - rectangle.top;
  console.log(event)

  if (findAreaByPoint({ x, y }) !== undefined) {
    event.target.style.cursor = "pointer";
    onMapHovered({ x, y }, { x: event.clientX, y: event.clientY });
  } else {
    event.target.style.cursor = "default";
    ui.tooltipField.style.display = "none";
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

    ui.tooltipField.style.display = "block";
    ui.tooltipField.style.position = "absolute";
    ui.tooltipField.style.left = `${clientPoint.x - 100}px`;
    ui.tooltipField.style.top = `${clientPoint.y + 20}px`;
    ui.tooltipField.innerHTML = area.tooltipText;
  }
}

ui.continueButton.addEventListener("click", selectEvent);

ui.option1.addEventListener("click", actionButtonClickedforOption1);
ui.option2.addEventListener("click", actionButtonClickedforOption2);

const malePortrait = document.querySelector("[data-portrait-male]");
const femalePortrait = document.querySelector("[data-portrait-female]");
const searchParams = new URLSearchParams(window.location.search);
  ui.characterName.innerText = searchParams.get("name");
let portrait = searchParams.get("portrait");
console.log(malePortrait);

function isPortraitVisible() {
  if (portrait === "female") {
    femalePortrait.style.display = "block";
  } else if (portrait === "male") {
    malePortrait.style.display = "block";
  } else {
    return
  }
}

window.addEventListener("load", function () {
  isPortraitVisible();
  selectEvent();
})