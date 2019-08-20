const pokemon = {
    getType: function() {
      return this.type;
    },
    getSpecie: function() {
      return this.specie;
    },
    canFly: function() {
      return this.fly; 
    },
    getPokemonType: function() {
      return this.pokemonType;
    }
  }
  
  function Charmander() {
    this.type = 'Fire';
    this.pokemonType = 'Charmander';
    this.specie = 'Lizard Pokémon';
    this.fly = false;
  }
  function Charmeleon() {
    this.specie = 'Flame Pokémon';
    this.pokemonType = 'Charmeleon';
  }
  function Charizard() {
    this.pokemonType = 'Charizard';
    this.fly = true;
  }
  function Pichu() {
    
  }
  function Pikachu() {
    
  }
  function Raichu() {
    
  }
  
  Charmander.prototype = pokemon;
  Charmeleon.prototype = new Charmander();
  Charizard.prototype = new Charmeleon();
  
  const charmander = new Charmander();
  const charmeleon = new Charmeleon();
  const charizard = new Charizard();
  
  console.log(charmander.getType()); // -> “Fire”
  console.log(charmander.getType() === charmeleon.getType()); // -> true
  console.log(charmeleon.getType() === charizard.getType()); // -> true
  
    //charmander.evolve().constructor === Charmeleon; // -> true
    //charmeleon.evolve().constructor === Charizard; // -> true
  
  console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
  console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
  console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true
  console.log(charmander.canFly()); // -> false
  console.log(charmander.canFly() === charmeleon.canFly()); // -> true
  console.log(charizard.canFly()); // -> true  