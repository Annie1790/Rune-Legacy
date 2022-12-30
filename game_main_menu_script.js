import ui from "./modules/ui.js";
import {eventArray, selectEvent, actionButtonClickedforOption1, actionButtonClickedforOption2, gameRules} from "./modules/scenario.js";
import {locationsArray, eklesaArray, tontDungArray} from "./modules/locations.js";
import player1Inventory, { Potion } from "./modules/inventory.js";




  ui.worldMap.addEventListener("click", function (event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
  
    onMapClicked(locationsArray,{ x, y })
  })
  
  ui.worldMap.addEventListener("mousemove", function (event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
  
  
    if (findAreaByPoint(locationsArray, { x, y }) !== undefined) {
      event.target.style.cursor = "pointer";
      onMapHovered(locationsArray, { x, y }, { x: event.clientX, y: event.clientY });
    } else {
      event.target.style.cursor = "default";
      ui.tooltipField.style.display = "none";
    }
  })


  ui.eklesaMap.addEventListener("click", function (event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
  
    onMapClicked(eklesaArray,{ x, y })
  });
  
  ui.eklesaMap.addEventListener("mousemove", function (event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
  
  
    if (findAreaByPoint(eklesaArray,{ x, y }) !== undefined) {
      event.target.style.cursor = "pointer";
      onMapHovered(eklesaArray,{ x, y }, { x: event.clientX, y: event.clientY });
    } else {
      event.target.style.cursor = "default";
      ui.tooltipField.style.display = "none";
    }
  })
  

  ui.tontDungeon.addEventListener("click", function (event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
  
    onMapClicked(tontDungArray,{ x, y })
  });
  
  ui.tontDungeon.addEventListener("mousemove", function (event) {
    let rectangle = event.target.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;
  
  
    if (findAreaByPoint(tontDungArray,{ x, y }) !== undefined) {
      event.target.style.cursor = "pointer";
      onMapHovered(tontDungArray,{ x, y }, { x: event.clientX, y: event.clientY });
    } else {
      event.target.style.cursor = "default";
      ui.tooltipField.style.display = "none";
    }
  })


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


ui.option1.addEventListener("click", actionButtonClickedforOption1);
ui.option2.addEventListener("click", actionButtonClickedforOption2);

const searchParams = new URLSearchParams(window.location.search);
let portrait= searchParams.get("portrait");
ui.characterName.innerText = searchParams.get("name");


function isPortraitVisible() {
  if (portrait === "female") {
    ui.femalePortrait.style.display = "block";
  } else if (portrait === "male") {
    ui.malePortrait.style.display = "block";
  } else {
    return
  }
}

window.addEventListener("load", function () {
  isPortraitVisible();
  gameRules(ui.scenarioName,
    ui.scenarioDescription,
    ui.option1,
    ui.option2, 
    ui.continueButton
  )
}
)

player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion()); 
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());
player1Inventory.addItem(new Potion());