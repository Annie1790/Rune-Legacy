import ui from "./modules/ui.js";
import { selectEvent, actionButtonClickedforOption1, actionButtonClickedforOption2} from "./modules/scenario.js";
import {locationsArray, eklesaArray} from "./modules/locations.js";
import player1Inventory from "./modules/inventory.js";




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
    console.log(event)
  
  
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
    console.log(event)
  
  
    if (findAreaByPoint(eklesaArray,{ x, y }) !== undefined) {
      event.target.style.cursor = "pointer";
      onMapHovered(eklesaArray,{ x, y }, { x: event.clientX, y: event.clientY });
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

ui.continueButton.addEventListener("click", selectEvent);

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
  selectEvent();
})

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);


player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);

player1Inventory.addItem(`img`,`./media/assets/potion1.png`);