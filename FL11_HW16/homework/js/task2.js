const create = function(objProto, props) {
        function Child() {
            //create child object
        }
        Child.prototype = objProto;
        return Object.assign(new Child(), props);
    },
    obj1 = {
        prop: 5
    },
    obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1); // => true
console.log(obj2.prop); // => 5