let id = Symbol('id');

const maxElement = arr => Math.max(...arr),
    copyArray = arr => [...arr],
    addUniqueId = obj => Object.assign({}, {[id]: 'symbolized'}, obj),
    regroupObject = function (obj) {
        let {name: firstName, details: user} = obj, 
            {id, age, university} = user;
        return {university, user: {age, firstName, id}};
    },
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
    },
    showNamesRepos1 = function (url) {
        return fetch(url)
            .then(request => request.json())
            .then(function (arr) {
                let resultArr = [];
                arr.forEach(obj => resultArr.push(obj.name));
                return resultArr;
            })
            .then(result => console.log(result))
            .catch(error => console.log(`ERROR: ${error.stack}`));
    },
    showNamesRepos2 = async function (url) {
        let resultArr = [];
        try {
            const request = await fetch(url),
                text = await request.json();
            text.forEach(obj => resultArr.push(obj.name));
        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
        return console.log(resultArr);
    };