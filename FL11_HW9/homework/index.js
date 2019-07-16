function getNumbers(stringOfNumbers) {
    let numbersArray = [],
        oneNumber, nanNumber;

    for (let i = 0; i < stringOfNumbers.length; i++) {
        oneNumber = parseFloat(stringOfNumbers[i]);
        nanNumber = isNaN(oneNumber);
        if (typeof oneNumber === 'number' && !nanNumber) {
            numbersArray.push(oneNumber);
        }
    }
    return numbersArray;
}

function findTypes() {
    let objectOfTypes = {},
        oneType;

    for (let i = 0; i < arguments.length; i++) {
        oneType = typeof arguments[i];

        switch (oneType) {
            case 'object':
                if (objectOfTypes.object) {
                    objectOfTypes.object++;
                } else {
                    objectOfTypes.object = 1;
                }
                break;
            case 'string':
                if (objectOfTypes.string) {
                    objectOfTypes.string++;
                } else {
                    objectOfTypes.string = 1;
                }
                break;
            case 'number':
                if (objectOfTypes.number) {
                    objectOfTypes.number++;
                } else {
                    objectOfTypes.number = 1;
                }
                break;
            case 'boolean':
                if (objectOfTypes.boolean) {
                    objectOfTypes.boolean++;
                } else {
                    objectOfTypes.boolean = 1;
                }
                break;
            case 'function':
                if (objectOfTypes.function) {
                    objectOfTypes.function++;
                } else {
                    objectOfTypes.function = 1;
                }
                break;
            case 'symbol':
                if (objectOfTypes.symbol) {
                    objectOfTypes.symbol++;
                } else {
                    objectOfTypes.symbol = 1;
                }
                break;
            case 'bigint':
                if (objectOfTypes.bigint) {
                    objectOfTypes.bigint++;
                } else {
                    objectOfTypes.bigint = 1;
                }
                break;
            default:
                if (objectOfTypes.undefined) {
                    objectOfTypes.undefined++;
                } else {
                    objectOfTypes.undefined = 1;
                }
        }
    }
    return objectOfTypes;
}

function executeForEach(inputArr, inputFunc) {
    for (let i = 0; i < inputArr.length; i++) {
        inputFunc(inputArr[i]);
    }
}

function mapArray(inputArr, inputFunc) {
    let resultArr = [];
    executeForEach(inputArr, function (element) {
        resultArr.push(inputFunc(element));
    });
    return resultArr;
}

function filterArray(inputArr, inputFunc) {
    let resultArr = [];
    executeForEach(inputArr, function (element) {
        if (inputFunc(element)) {
            resultArr.push(element);
        }
    });
    return resultArr;
}

function showFormattedDate(dateValue) {
    const START_NUM = 4,
        END_NUM = 15;
    let dateStr = dateValue.toString().slice(START_NUM, END_NUM);

    return 'Date: ' + dateStr;
}

function canConvertToDate(stringValue) {
    return Boolean(Date.parse(stringValue));
}

function daysBetween(date1, date2) {
    const ONE_DAY_IN_SEC = 86400000;
    let diffInSec = Math.abs(Date.parse(date1) - Date.parse(date2)),
        diffInDays = Math.round(diffInSec / ONE_DAY_IN_SEC);

    return diffInDays;
}

function getAmountOfAdultPeople(data) {
    const DAYS_IN_YEAR = 365,
        UNDERAGE = 17;
    let adultPersons = 0;

    filterArray(data, function (inputObj) {
        let today = new Date(),
            personBirthday = new Date(Date.parse(inputObj[' birthday '])),
            daysBetweenResult = daysBetween(today, personBirthday),
            personAge = Math.round(daysBetweenResult / DAYS_IN_YEAR);

        if (personAge > UNDERAGE) {
            adultPersons++;
        }
    });
    return adultPersons;
}

function keys(inputObj) {
    let resultArr = [];

    for (let keyName in inputObj) {
        if (inputObj.hasOwnProperty(keyName)) {
            resultArr.push(keyName);
        }
    }
    return resultArr;
}

function values(inputObj) {
    let resultArr = [];
    
    for (let keyName in inputObj) {
        if (inputObj.hasOwnProperty(keyName)) {
            resultArr.push(inputObj[keyName]);
        }
    }
    return resultArr;
}