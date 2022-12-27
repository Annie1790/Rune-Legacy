import ui from "./modules/ui.js";
import { selectEvent, actionButtonClickedforOption1, actionButtonClickedforOption2} from "./modules/scenario.js";
import locationsArray from "./modules/locations.js";




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