let nameInput = document.querySelector('#nameInput'),
    animationBlock = document.querySelector('.animation-block'),
    contentBlock = document.querySelector('.content-block'),
    popUp = document.querySelector('.popup'),
    counterPlace = document.querySelector('#countIt'),
    counter = function () {
        let action = 0;
        return function () {
            action += 1;
            return action
        }
    }(),
    mainData, idNumberNow, dataRowNow;

function getData() {
    let xhr = new XMLHttpRequest(),
        startBlock = document.querySelector('.start-block');
    startBlock.classList.add('hidden');
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        loadingProcess();
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let responseArr = xhr.response,
                tableHead = responseArr[0],
                result = '<tr>';
            mainData = responseArr.slice();
            for (const prop in tableHead) {
                result += `<th>${prop}</th>`;
            }
            result += '<th>actions</th></tr><tr>';
            responseArr.forEach(obj => {
                for (const prop in obj) {
                    if (prop === 'address') {
                        result += `<td>${JSON.stringify(obj[prop])}</td>`;
                    } else if (prop === 'company') {
                        result += `<td>${JSON.stringify(obj[prop])}</td>`;
                    } else {
                        result += `<td>${obj[prop]}</td>`;
                    }
                }
                result += `<td><button onclick="editData(this)">Edit</button><br>
                <button onclick="deleteData(this)">Delete</button></td></tr>`;
            });
            document.querySelector('#table').innerHTML = result;
        }
        loadingProcess();
        counterPlace.textContent = counter();
    };
}

function deleteData(scope) {
    let dataRow = scope.parentElement.parentElement,
        idNumber = dataRow.firstChild.textContent,
        xhr = new XMLHttpRequest();

    xhr.open('DELETE', `https://jsonplaceholder.typicode.com/users/${idNumber}`);
    xhr.send();
    xhr.onload = function () {
        loadingProcess();
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            dataRow.remove();
        }
    }
    loadingProcess();
    counterPlace.textContent = counter();
}

function editData(scope) {
    dataRowNow = scope.parentElement.parentElement;
    idNumberNow = dataRowNow.firstChild.textContent;
    nameInput.value = dataRowNow.firstChild.nextSibling.textContent;
    popUp.classList.toggle('hidden');
}

function cancelEditData() {
    nameInput.value = '';
    popUp.classList.toggle('hidden');
}

function saveData() {
    let xhr = new XMLHttpRequest(),
        newName = nameInput.value,
        body;
    mainData[idNumberNow - 1].name = newName;
    body = JSON.stringify(mainData[idNumberNow - 1]);
    xhr.open('PUT', `https://jsonplaceholder.typicode.com/users/${idNumberNow}`);
    xhr.send(body);
    xhr.onload = function () {
        loadingProcess();
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            dataRowNow.firstChild.nextSibling.textContent = newName;
        }
    }
    loadingProcess();
    nameInput.value = '';
    popUp.classList.toggle('hidden');
    counterPlace.textContent = counter();
}

function loadingProcess() {
    animationBlock.classList.toggle('hidden');
    contentBlock.classList.toggle('hidden');
}