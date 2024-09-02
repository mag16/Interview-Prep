/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:

declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

class Fighter {
    constructor(name, health, damagePerAttack) {
      this.name = name;
      this.health = health;
      this.damagePerAttack = damagePerAttack;
    }
  }
  
  function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
    let defender = fighter1.name === firstAttacker ? fighter2 : fighter1;
    
    while (true) {
      // Attacker hits the defender
      defender.health -= attacker.damagePerAttack;
      
      // Check if the defender is dead
      if (defender.health <= 0) {
        return attacker.name;
      }
  
      // Swap roles: defender becomes the attacker and vice versa
      [attacker, defender] = [defender, attacker];
    }
  }
  
  // Example usage:
  const fighter1 = new Fighter("Lew", 10, 2);
  const fighter2 = new Fighter("Harry", 5, 4);
  
  console.log(declareWinner(fighter1, fighter2, "Lew")); // Outputs: "Lew"

  /* 
  
Determine First Attacker:
let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
This line checks if fighter1's name matches the firstAttacker string. If it does, fighter1 becomes the attacker, otherwise, fighter2 is the attacker.
Determine Defender:
let defender = fighter1.name === firstAttacker ? fighter2 : fighter1;
This line sets fighter2 as the defender if fighter1 is the attacker, and vice versa. This is based on the outcome of the first line.
Why Not Use fighter2.name Directly:
In this context, fighter1.name and fighter2.name are used to establish the roles of attacker and defender because the firstAttacker can be either fighter. If you included fighter2.name in the comparison, you would need to adjust the logic to account for both fighters:

You could explicitly check if fighter2 is the first attacker and adjust the assignments accordingly.
However, by using a single comparison with fighter1.name, you streamline the logic and avoid redundancy, since you inherently handle both fighters in the ternary operator:

If fighter1 is the first attacker, then fighter1 is assigned as attacker and fighter2 as defender.
If fighter2 is the first attacker, then fighter2 is assigned as attacker and fighter1 as defender.
Summary:
The approach uses fighter1.name to check the first attacker because it effectively determines the roles of both fighters without needing additional checks for fighter2.name. This simplifies the code and ensures the correct assignment of roles based on who should attack first.
  
  
  
  
  
  
  
  */
  
    
    
    

