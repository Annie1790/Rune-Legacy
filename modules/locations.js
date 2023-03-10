import { isLevelDone, markLevelDone } from "./event_level_status.js";
import { setActiveEvents } from "./event_selector.js";
import { tDLvl1, tdLvl2 } from "./scenario.js";
import ui from "./ui.js";

function findAreaByPoint(array, point) {
  return array.find((mapArea) => {
    return (
      mapArea.topLeft.x <= point.x &&
      mapArea.bottomRight.x >= point.x &&
      mapArea.topLeft.y <= point.y &&
      mapArea.bottomRight.y >= point.y
    );
  });
}

function onMapClicked(array, point) {
  console.log(point)
  const area = findAreaByPoint(array, point);
  if (area !== undefined) {
    area.action();
  }
}

function onMapHovered(array, point, clientPoint) {
  const area = findAreaByPoint(array, point);
  if (area !== undefined) {

    ui.tooltipField.style.display = "block";
    ui.tooltipField.style.position = "absolute";
    ui.tooltipField.style.left = `${clientPoint.x - 100}px`;
    ui.tooltipField.style.top = `${clientPoint.y + 20}px`;
    ui.tooltipField.innerHTML = area.tooltipText;
  }
}

function getCoordinates(event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
    return {x, y}
  }

function mapEventClick(mapElement, locationArray) {
  mapElement.addEventListener("click", function (event) {
    const coordinates = getCoordinates(event);
    onMapClicked(locationArray, coordinates);
  })
}

function mapEventHover(mapElement, locationArray) {
  mapElement.addEventListener("mousemove", function (event) {
    const coordinates = getCoordinates(event);


    if (findAreaByPoint(locationArray, coordinates) !== undefined) {
      event.target.style.cursor = "pointer";
      onMapHovered(locationArray, coordinates, { x: event.clientX, y: event.clientY });
    } else {
      event.target.style.cursor = "default";
      ui.tooltipField.style.display = "none";
    }
  })
}

export function addMapEvents(mapElement, locationArray) {
  mapEventClick(mapElement,locationArray);
  mapEventHover(mapElement,locationArray)
}




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

  tooltipText: "Canal Outpost lays next to the river Danube along with many monstrous mountains. It is also home to many monsters. Better come prepared!",
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
    ui.eklesaMap.style.display = "block";
    ui.worldMap.style.display = "none";
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
    ui.tontDungeon.style.display = "block";
    ui.worldMap.style.display = "none";
  },

  tooltipText: "Tont is a barren area of landscape where living conditions are hostile for humans. The valley keeps many secrets. <p> Click to enter dungeon </p> "
};

const mill =
{
  topLeft: {
    x: 120,
    y: 65,
  },
  bottomRight: {
    x: 170,
    y: 85,
  },
  action: function () {
    console.log("Mill");
  },

  tooltipText: "The mill"
};

const fortuneTeller =
{
  topLeft: {
    x: 62,
    y: 196,
  },
  bottomRight: {
    x: 261,
    y: 214,
  },
  action: function () {
    console.log("Fortune Teller");
  },

  tooltipText: "Fortune teller"
};

const inn =
{
  topLeft: {
    x: 71,
    y: 315,
  },
  bottomRight: {
    x: 118,
    y: 337,
  },
  action: function () {
    console.log("Inn");
  },

  tooltipText: "The inn"
};

const church =
{
  topLeft: {
    x: 468,
    y: 200,
  },
  bottomRight: {
    x: 567,
    y: 220,
  },
  action: function () {
    console.log("The church");
  },

  tooltipText: "The church"
};

const fireplace =
{
  topLeft: {
    x: 284,
    y: 423,
  },
  bottomRight: {
    x: 410,
    y: 444,
  },
  action: function () {
    console.log("Fireplace");
  },

  tooltipText: "A place to sleep and heal yourself. It's free to stay, but beware of thiefs!"
};

const trader =
{
  topLeft: {
    x: 367,
    y: 384,
  },
  bottomRight: {
    x: 570,
    y: 408,
  },
  action: function () {
    console.log("The trader's house");
  },

  tooltipText: "The trader's house"
};

const lodge =
{
  topLeft: {
    x: 455,
    y: 537,
  },
  bottomRight: {
    x: 533,
    y: 564,
  },
  action: function () {
    console.log("The lodge");
  },

  tooltipText: "For some gold, you can stay for a night to heal your wounds."
};

const compassEklesa =
{
  topLeft: {
    x: 535,
    y: 23,
  },
  bottomRight: {
    x: 640,
    y: 128,
  },
  action: function () {
    console.log("compass");
    ui.eklesaMap.style.display = "none";
    ui.worldMap.style.display = "block";
  },

  tooltipText: "Back to world map"
};

const compassTontDung =
{
  topLeft: {
    x: 6,
    y: 656,
  },
  bottomRight: {
    x: 111,
    y: 757,
  },
  action: function () {
    ui.tontDungeon.style.display = "none";
    ui.worldMap.style.display = "block";
  },

  tooltipText: "Back to world map"
};

const tontDungLvl1 =
{
  topLeft: {
    x: 403,
    y: 70,
  },
  bottomRight: {
    x: 434,
    y: 101,
  },
  action: function () {
    setActiveEvents(tDLvl1, function () {
      markLevelDone("tontDungLvl1");
    })
  },

  tooltipText: "Level 1"
};

const tontDungLvl2 =
{
  topLeft: {
    x: 466,
    y: 165,
  },
  bottomRight: {
    x: 500,
    y: 196,
  },
  action: function () {
    if (isLevelDone("tontDungLvl1")) {
      setActiveEvents(tdLvl2, function () {
        markLevelDone("tontDungLvl2");
      })
    }
  },

  tooltipText: "Level 2"
};

const tontDungLvl3 =
{
  topLeft: {
    x: 278,
    y: 375,
  },
  bottomRight: {
    x: 305,
    y: 401,
  },
  action: function () {
    
  },

  tooltipText: "Level 3"
};

const tontDungLvl4 =
{
  topLeft: {
    x: 551,
    y: 405,
  },
  bottomRight: {
    x: 579,
    y: 433,
  },
  action: function () {
    
  },

  tooltipText: "Level 4"
};

const tontDungLvl5 =
{
  topLeft: {
    x: 444,
    y: 506,
  },
  bottomRight: {
    x: 466,
    y: 528,
  },
  action: function () {
    
  },

  tooltipText: "Level 5"
};

export const locationsArray = [canalOutpost, Eklesa, magicForest, Onavale, beastField, Tont];

export const eklesaArray = [mill, fortuneTeller, inn, church, fireplace, trader, lodge, compassEklesa]

export const tontDungArray = [compassTontDung, tontDungLvl1, tontDungLvl2, tontDungLvl3, tontDungLvl4, tontDungLvl5]