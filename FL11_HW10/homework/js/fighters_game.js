function Fighter(inputObject) {   
    this.data = {
        name: inputObject.name,
        damage: inputObject.damage,
        hp: inputObject.hp,
        agility: inputObject.agility,
        wins: 0,
        loss: 0
    };
    this.getName = function () {
        return this.data.name;
    };
    this.getDamage = function () {
        return this.data.damage;
    };
    this.getHealth = function () {
        return this.data.hp;
    };
    this.getAgility = function () {
        return this.data.agility;
    };
    this.attack = function (defender) {
        const rangeChance = 100;
        let defChance = defender.data.agility;
        let attackValue = Math.floor(Math.random() * rangeChance + 1);

        if (attackValue > defChance) {
            defender.dealDamage(this.data.damage);
            console.log(`${this.data.name} makes ${this.data.damage} damage to ${defender.data.name}`);
        } else {
            console.log(`${this.data.name}'s attack missed`);
        }
    };
    this.logCombatHistory = function () {
        console.log(`Name: ${this.data.name}, Wins: ${this.data.wins}, Losses: ${this.data.loss}`);
    };
    this.heal = function (num) {
        this.data.hp += num;
    };
    this.dealDamage = function (num) {
        this.data.hp -= num;
        if (this.data.hp < 0) {
            this.data.hp = 0;
        }
    };
    this.addWins = function () {
        this.data.wins += 1;
    };
    this.addLoss = function () {
        this.data.loss += 1;
    };
}

function battle(firstFighter, secondFighter) {
    if (secondFighter.data.hp === 0) {
        return console.log(`${secondFighter.getName()} is dead and can't fight`);
    } else if (firstFighter.data.hp === 0) {
        return console.log(`${firstFighter.getName()} is dead and can't fight`);
    }
    firstFighter.attack(secondFighter);
    if (secondFighter.data.hp === 0) {
        secondFighter.addLoss();
        firstFighter.addWins();
        return console.log(`${secondFighter.getName()} is dead and can't fight`);
    }
    secondFighter.attack(firstFighter);
    if (firstFighter.data.hp === 0) {
        firstFighter.addLoss();
        secondFighter.addWins();
        return console.log(`${firstFighter.getName()} is dead and can't fight`);
    }
    return battle(firstFighter, secondFighter);
}