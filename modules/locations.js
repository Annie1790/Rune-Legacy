import ui from "./ui.js";

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
  },

  tooltipText: "Tont is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. On the other hand, this is the home of sand people."
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


export const locationsArray = [canalOutpost, Eklesa, magicForest, Onavale, beastField, Tont];

export const eklesaArray = [mill]

