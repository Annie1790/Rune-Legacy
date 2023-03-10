import ui from "./ui.js";
import { player1 } from "./player.js";
import { player1Inventory,herbsAndEffects,runes, potions} from "./inventory.js";
import { fightScene } from "./fight.js";

class Event {
  constructor(name, description, option1, option2) {
    this.name = name;
    this.description = description;
    this.option1 = option1;
    this.option2 = option2;
  }

  updateDisplay() {
    ui.scenarioName.innerHTML = this.name;
    ui.scenarioDescription.innerHTML = this.description;
    ui.option1.innerHTML = this.option1.name;
    ui.option2.innerHTML = this.option2.name;
  }
}

class EventOption {
  constructor(name, actionfun) {
    this.name = name;
    this.actionfun = actionfun;
  }
}

export let currentEvent = null;

export let tDLvl1 = [new Event("The entarance of Tont valley...",
  "Soft, quiet sobs can be heard as you fall to a dark circular room, while thick sand bricks cover the way to the next room. While you lit your candle, you see the fractured floor is littered with stones and large rubble. A single lantern can be found in the center of the room. It is unlit, but slightly warm, recently used. Looks like someone been here recently? Might be good to use this lantern instead of your candle. You don't seem to find any way to move the bricks.",
  new EventOption("Pick up the lantern", function () {
    ui.scenarioDescription.innerHTML = "You decide to pick up the lantern, suddenly you hear a clicking sound. It was a trap set. An arrow tip hit your leg. with minor injures, but you manage to remove the tip. While healing yourself, a statue emerges from the ground, and moves the bricks.";
    player1.damage(2);
    player1.gainExperience(1);
  }),
  new EventOption("Try to find a switch on the wall", function () {
    player1.gainExperience(2);
    player1Inventory.receiveGold(15);
    ui.scenarioDescription.innerHTML = "The lantern was too suspicious, you decide to leave it there. Might be a trap. Took you a bit of time, but you found a switch. A statue emerges from the ground and moves the bricks away. Because of your decision, you found some gold and gained experience!"
  }
  )
)];
export let tdLvl2 = [
  new Event("Moving forward...",
    "Moving forward, a narrow and long hallway faces you. Anctient writings decorate the sandbrick walls, and dead insects, human remainings cover the floor. While examining the ancient writings, you recognize some of the words written in english. 'fire, ice, lightning'. That doesn't make sense. Right next to you, a small hollow can be found on the wall. You discover a small, slightly shiny rock fragment.",
    new EventOption("Examine the hollow", function () {
      ui.scenarioDescription.innerHTML = "You found something. Along with some gold, the shiny stone reveals its power. It's a rune! Congratulations on finding your first rune!";
      player1Inventory.addItem(runes.smallRuneOfFireBolt);
      player1.gainExperience(3);
      player1Inventory.receiveGold(25);
    }),
    new EventOption("Leave it", function () {
      ui.scenarioDescription.innerHTML = "You didn't make the best decision, but the strange feeling, and maybe your curiosity did not let you to leave the rock in the hollow. The shiny stone reveals its power. It's a rune! Congratulations on finding your first rune!"
      player1.gainExperience(2);
      player1Inventory.addItem(runes.smallRuneOfFireBolt);
    }
    )
  ),
  new Event("Familiar face?",
    "Getting closer to the end of the tunnel, you hear something. It sounds like someone you might have known him from the past. Familiar, but you don't remember right now who he could be. It also sounds like he is moaning for help. Might be a trap. Maybe your mind plays tricks on you? At the end of the tunnel, there are two ways to go: on the left, where the sound comes from, or on the right, which looks like another long tunnel. ",
        new EventOption("Turn left", function () {
      ui.scenarioDescription.innerHTML = "It seems like your mind, or something in the dungeon plays tricks with you. The empty room filled with mummified animal bodies and one human body. Next to him, you find some herbs, a potion, and gain experience. The room doesn't lead anywhere, so you decide to go back and turn right.";
      player1Inventory.addItem(herbsAndEffects.trurpore);
      player1Inventory.addItem(herbsAndEffects.coccoraHat);
      player1Inventory.addItem(potions.minorHealingPotion);
      player1.gainExperience(3);
    }),
    new EventOption("Turn right", function () {
      player1.gainExperience(2);
      ui.scenarioDescription.innerHTML = "You decide to ignore the sound from the left direction and discover the tunnel. You gain experience. "
    }
    )
  ),
  new Event("Fight with bats?",
    "Your journey continues at the end of the tunnel, which leads to a bigger, monstrous cave system. Suddenly, you facing a large horde of bat colony. ", 
    new EventOption("Fight!", function () {
      fightScene()
    }),
    new EventOption("Run away!", function () {
      player1.gainExperience(2);
      ui.scenarioDescription.innerHTML = "You decide to sneak through the cave system. You gain some experience points."
    }
    )
  ),
]

export function gameRules(header, paragraph, button1, button2, contButton) {
  header.innerHTML = "Game Rules";
  paragraph.innerHTML = "<h2>The hero is awaken....</h2> <p>Each location will have different scenarios, for instance dungeons, puzzles, and fight scenes. Your job is to clear all levels and reach the final boss.</p> <p>The map on your left consist the places you can move to. To get back to main map, simply click on the compasses.</p> <p>Dungeons always start at level 1. Simply click on the numbers.</p> <p>On your right, there are health, level, experience points. Gain more experience to level up and unlock more features.</p> <p>On the bottom, you can find the inventory. In the future, you can loot certain things (swords, potions, and of course, runes) which you can also sell in the village of Eklesa.</p> <p>Make sure to loot as much runes as you can. They will be beneficial on your journey.</p> <p>If you enjoyed the game, make sure to leave a review by e-mail: budayaniko@outook.com</p>";
  button1.style.display = "none";
  button2.style.display = "none";
  contButton.style.display = "none";
}