const assign = function (targetObj, ...objects) {
        for (let i = 0; i < objects.length; i++) {
            for (const prop in objects[i]) {
                if (Object.prototype.hasOwnProperty.call(objects[i], prop)) {
                    targetObj[prop] = objects[i][prop];
                }
            }
        }
        return targetObj;
    },
    defaults = {
        a: 123,
        b: 777
    },
    options = {
        a: 456
    },
    configs = assign({}, defaults, options);

console.log(configs);