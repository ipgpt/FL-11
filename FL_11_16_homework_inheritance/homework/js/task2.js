function Child() {
//create child object
}

const create = function (obj) {
    Child.prototype = obj;
    return new Child();
}

const obj1 = {
    prop: 5
};
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);