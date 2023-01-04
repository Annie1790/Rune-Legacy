import ui from "./ui.js";
import { player1 } from "./player.js";
import { player1Inventory,Herb, Potion, Rune } from "./inventory.js";

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
      player1Inventory.addItem(new Rune("./media/assets/rune1.png", 2, 4, "Damage: 2-4"));
      player1.gainExperience(3);
      player1Inventory.receiveGold(25);
    }),
    new EventOption("Leave it", function () {
      ui.scenarioDescription.innerHTML = "You didn't make the best decision, but the strange feeling, and maybe your curiosity did not let you to leave the rock in the hollow. The shiny stone reveals its power. It's a rune! Congratulations on finding your first rune!"
      player1.gainExperience(2);
      player1Inventory.addItem(new Rune("./media/assets/rune1.png", 2, 4, "Damage: 2-4",2));
    }
    )
  ),
  new Event("Familiar face?",
    "Moving forward, gibberish words can be heard at the end of the tunnel. It sounds like an old greybeard, who you might have known from the past. Really familiar, but you just don't remember right now. It also sounds like he is moaning for help. Might be a trap? Maybe your mind plays tricks with you? ",
    new EventOption("Ignore him", function () {
      ui.scenarioDescription.innerHTML = "It seems like your mind plays tricks with you. When you reached the next room, there was no one there. On your way, you found some herbs.";
      player1Inventory.addItem(new Herb("./media/assets/trurpore.png", "Combine herbs to make potions! Heals the player by <strong>5</strong> points.",0.1))
      player1.gainExperience(3);
    }),
    new EventOption("support him", function () {
      player1.gainExperience(2);
      player1Inventory.receiveGold(15);
      ui.scenarioDescription.innerHTML = "d option clicked"
    }
    )
  ),
  new Event("Test lvl 2/3",
    "e or f", new EventOption("e", function () {
      ui.scenarioDescription.innerHTML = "e option clicked";
      player1.damage(2);
      player1.gainExperience(1);
    }),
    new EventOption("f", function () {
      player1.gainExperience(2);
      player1Inventory.receiveGold(15);
      ui.scenarioDescription.innerHTML = "f option clicked"
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