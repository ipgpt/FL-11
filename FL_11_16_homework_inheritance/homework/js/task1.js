const magic = {
        assign: function (target, ...objects) {
            for (let i = 0; i < objects.length; i++) {
                for (const prop in objects[i]) {
                    if (Object.prototype.hasOwnProperty.call(objects[i], prop)) {
                        target[prop] = objects[i][prop];
                    }
                }
            }
        }
    },
    a = {
        name: 'john',
        surname: 'smith'
    },
    b = {
        age: 30,
        isVisa: false
    },
    c = {};

magic.assign(c, a, b);
console.log(c);