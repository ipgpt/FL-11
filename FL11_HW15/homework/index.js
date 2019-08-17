function Hamburger(type, calories) {
    this.type = type;
    this._calories = arguments[2] ? calories + 100 :
        calories;
    this.isCheese = false;
    this.tomatoes = 0;
    this.isSecretIngredient = arguments[2] || false;
    this.isBite = false;
    this.biteCounter = 0;
    this.getCalories = function () {
        return this._calories;
    };
    this.setCalories = function (value) {
        this._calories = value;
    }
    this.addCheese = function () {
        if (this.isBite) {
            console.log('Sorry, you cannot add cheese');
        } else if (!this.isCheese) {
            this._calories += 120;
            this.isCheese = true;
        } else {
            console.log('Sorry, you can add cheese only once.');
        }
    }
    this.addTomato = function () {
        if (this.isBite) {
            console.log('Sorry, you cannot add tomato');
        } else if (this.tomatoes < 2) {
            this._calories += 20;
            this.tomatoes++;
        } else {
            console.log('Sorry, you can add tomato only twice.');
        }
    }
    this.addSecretIngredient = function () {
        if (this.isBite) {
            console.log('Sorry, you cannot add secret ingredient');
        } else if (this.isSecretIngredient) {
            console.log('Sorry, you can add secret ingredient only once.');
        } else if (this.tomatoes > 0 && this.isCheese) {
            this._calories += 100;
            this.isSecretIngredient = true;
        } else {
            console.log('Sorry, you can add secret ingredient only before another ingredient.');
        }
    }
    this.bite = function () {
        this.isBite = true;
        this.biteCounter++;
    }
    this.info = function () {
        var SecretIngredientText = this.isSecretIngredient ? 'with secret ingredient, ' :
            'without secret ingredient, ',
            cheeseText = this.isCheese ? 'with cheese, ' : 'without cheese, ',
            tomatoText = !this.tomatoes ? 'without tomato, ' :
            'with ' + this.tomatoes + ' tomato(es), ',
            bitText = 'is bit ' + this.biteCounter + ' times. ';
        return this.type.slice(0, 1).toUpperCase() + this.type.slice(1) + ' hamburger: ' +
            SecretIngredientText + cheeseText + tomatoText + bitText +
            'Total calories: ' + this.getCalories() + '.';
    }
}

console.log('check task 1');
const myHamburger = new Hamburger('classic', 600);
console.log(myHamburger);
console.log('check task 2');
console.log(myHamburger.getCalories());
myHamburger.setCalories(700);
console.log(myHamburger.getCalories());
console.log('check task 3');
myHamburger.addCheese();
console.log(myHamburger.getCalories());
myHamburger.addCheese();
console.log('check task 5');
myHamburger.addSecretIngredient();
console.log('check task 4');
myHamburger.addTomato();
console.log(myHamburger.getCalories());
myHamburger.addTomato();
console.log(myHamburger.getCalories());
myHamburger.addTomato();
console.log('check task 5');
myHamburger.addSecretIngredient();
console.log(myHamburger.getCalories());
myHamburger.addSecretIngredient();
console.log('check task 6');
const myHamburger2 = new Hamburger('chicken', 600, true);
console.log(myHamburger2);
myHamburger2.addSecretIngredient();
console.log(myHamburger2.getCalories());
const myHamburger3 = new Hamburger('fish', 600, false);
console.log(myHamburger3);
console.log(myHamburger3.getCalories());
myHamburger3.addSecretIngredient();
console.log(myHamburger3.getCalories());
console.log('check task 7');
myHamburger.bite();
myHamburger.bite();
myHamburger.addCheese();
myHamburger.addTomato();
myHamburger.addSecretIngredient();
console.log('check task 8');
console.log(myHamburger.info());
myHamburger2.addTomato();
myHamburger2.bite();
console.log(myHamburger2.info());
myHamburger3.addCheese();
console.log(myHamburger3.info());