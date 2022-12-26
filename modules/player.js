import ui from "./ui.js"

class Character {
    constructor() {
      this.name = new URLSearchParams(window.location.search).get("name");
      this.health = +ui.characterHealth.innerHTML;
      this.experience = +ui.characterExperience.innerHTML;
      this.level = +ui.characterLevel.innerHTML;
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
      ui.characterName.innerHTML = this.name;
      ui.characterHealth.innerHTML = this.health;
      ui.characterExperience.innerHTML = this.experience;
      ui.characterLevel.innerHTML = this.level;
    }
  
  }

const player1 = new Character();

export default player1;