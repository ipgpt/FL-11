function Pokemon() {
    this.getType = function () {
        return this.type;
    };
    this.getSpecie = function () {
        return this.specie;
    };
    this.canFly = function () {
        return this.fly;
    };
    this.getPokemonType = function () {
        return this.pokemonType;
    };
    this.evolve = function () {
        if (this.__proto__.getPokemonType()) {
            return new this.__proto__.__proto__.constructor();
        } else {
            return this;
        }
    }
}

function Charmander() {
    this.pokemonType = 'Charmander';
    this.specie = 'Lizard Pokémon';
}

function Charmeleon() {
    this.pokemonType = 'Charmeleon';
    this.fly = false;
}

function Charizard() {
    this.type = 'Fire';
    this.specie = 'Flame Pokémon';
    this.pokemonType = 'Charizard';
    this.fly = true;
}

function Pichu() {
    this.pokemonType = 'Pichu';
}

function Pikachu() {
    this.pokemonType = 'Pikachu';
}

function Raichu() {
    this.type = 'Electric';
    this.specie = 'Mouse Pokémon';
    this.pokemonType = 'Raichu';
}

Charizard.prototype = new Pokemon();
Charmeleon.prototype = new Charizard();
Charmander.prototype = new Charmeleon();
Charizard.prototype.constructor = Charizard;
Charmeleon.prototype.constructor = Charmeleon;
Charmander.prototype.constructor = Charmander;
Raichu.prototype = new Pokemon();
Pikachu.prototype = new Raichu();
Pichu.prototype = new Pikachu();
Raichu.prototype.constructor = Raichu;
Pikachu.prototype.constructor = Pikachu;
Pichu.prototype.constructor = Pichu;

const charmander = new Charmander(),
    charmeleon = new Charmeleon(),
    charizard = new Charizard(),
    pichu = new Pichu(),
    pikachu = pichu.evolve(),
    raichu = pikachu.evolve(),
    raichu2 = raichu.evolve();

console.log(charmander.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true
console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true
console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true
console.log(charmander.canFly()); // -> false
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true
console.log(pichu.getPokemonType()); // => Pichu
console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true
console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true
console.log(raichu2 === raichu); // true  