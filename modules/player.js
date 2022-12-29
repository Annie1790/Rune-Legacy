import ui from "./ui.js"


/* to check if player has the correct values: 
browser console,
const player = await import("./modules/player.js"),
player.default */
class Character {
    constructor() {
      this.name = new URLSearchParams(window.location.search).get("name");
      this.health = +ui.characterHealth.innerHTML;
      this.experience = +ui.characterExperience.innerHTML;
      this.level = +ui.characterLevel.innerHTML;
      this.minDamage = +ui.minDamage.innerHTML;
        this.maxDamage = +ui.maxDamage.innerHTML;
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
      if (this.experience >= 100 && this.level === 7) {
        this.experience = 0;
        this.levelUp();
      }
      else if (this.experience >= 80 && this.level === 6) {
        this.experience = 0;
        this.levelUp();
      }
      else if (this.experience >= 60 && this.level === 5) {
        this.experience = 0;
        this.levelUp();
      }
      else if (this.experience >= 45 && this.level === 4) {
        this.experience = 0;
        this.levelUp();
      }
      else if (this.experience >= 30 && this.level === 3) {
        this.experience = 0;
        this.levelUp();
      }
      else if (this.experience >= 15 && this.level === 2) {
        this.experience = 0;
        this.levelUp();
      }
      else if (this.experience >= 5 && this.level === 1) {
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
      ui.characterName.innerHTML = this.name;
      ui.characterHealth.innerHTML = this.health;
      ui.characterExperience.innerHTML = this.experience;
      ui.characterLevel.innerHTML = this.level;
      ui.minDamage.innerHTML = this.minDamage;
      ui.maxDamage.innerHTML = this.maxDamage;
    }
  
  }

const player1 = new Character();
export default player1;