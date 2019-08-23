let id = Symbol('id');

const maxElement = arr => Math.max(...arr),
    copyArray = arr => [...arr],
    addUniqueId = obj => Object.assign({}, {[id]: 'symbolized'}, obj),

    findUniqueElements = function (arr) {
        let resultSet = new Set(arr);
        return [...resultSet];
    },
    hideNumber = str => '*'.repeat(str.length - 4) + str.slice(-4),
    add = function (...numbers) {
        let [a, b] = numbers,
        sum = a + b;
        function required(result) {
            try {
                if (isNaN(result)) {
                    throw 'Error';
                } else {
                    return result;
                }
            } catch {
                throw new Error('Missing property');
            }
        }
        return required(sum);
    };