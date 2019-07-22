const privateData = new WeakMap();

class Fighter {
    constructor(inputObject) {
        privateData.set(this, {
            name: inputObject.name,
            damage: inputObject.damage,
            hp: inputObject.hp,
            agility: inputObject.agility,
            wins: 0,
            loss: 0
        });
    }
    getName() {
        return privateData.get(this).name;
    }
    getDamage() {
        return privateData.get(this).damage;
    }
    getHealth() {
        return privateData.get(this).hp;
    }
    getAgility() {
        return privateData.get(this).agility;
    }
    addWins() {
        privateData.get(this).wins += 1;
    }
    addLoss() {
        privateData.get(this).loss += 1;
    }
    logCombatHistory() {
        console.log(`Name: ${this.getName()}` +
            ` Wins: ${privateData.get(this).wins}, Losses: ${privateData.get(this).loss}`);
    }
    heal(num) {
        privateData.get(this).hp += num;
    }
    dealDamage(num) {
        privateData.get(this).hp -= num;
        if (privateData.get(this).hp < 0) {
            privateData.get(this).hp = 0;
        }
    }
    attack(defender) {
        const attackRange = 100;
        let dodge = defender.getAgility();
        let attackChance = Math.floor(Math.random() * attackRange + 1);
        if (attackChance > dodge) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()}'s attack missed`);
        }
    }
}

function battle(firstFighter, secondFighter) {
    if (secondFighter.getHealth() === 0) {
        return console.log(`${secondFighter.getName()} is dead and can't fight`);
    } else if (firstFighter.getHealth() === 0) {
        return console.log(`${firstFighter.getName()} is dead and can't fight`);
    }
    firstFighter.attack(secondFighter);
    if (secondFighter.getHealth() === 0) {
        secondFighter.addLoss();
        firstFighter.addWins();
        return console.log(`${secondFighter.getName()} is dead and can't fight`);
    }
    secondFighter.attack(firstFighter);
    if (firstFighter.getHealth() === 0) {
        firstFighter.addLoss();
        secondFighter.addWins();
        return console.log(`${firstFighter.getName()} is dead and can't fight`);
    }
    return battle(firstFighter, secondFighter);
}

const troll = new Fighter({
        name: 'Troll',
        damage: 20,
        hp: 100,
        agility: 25
    }),
    goblin = new Fighter({
        name: 'Goblin',
        damage: 30,
        hp: 80,
        agility: 40
    });

battle(troll, goblin);