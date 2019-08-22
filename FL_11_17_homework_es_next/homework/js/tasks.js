let id = Symbol('id');

const maxElement = arr => Math.max(...arr),
    copyArray = arr => [...arr],
    addUniqueId = obj => Object.assign({}, {[id]: 'symbolized'}, obj),

    findUniqueElements = function(arr) {
        let resultSet = new Set();
        arr.forEach(function(el) {
          if (!resultSet.has(el)) {
            resultSet.add(el);
          }
        });
        return [...resultSet];
      },
    hideNumber = str => '*'.repeat(str.length - 4) + str.slice(-4),