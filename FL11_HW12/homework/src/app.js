const rootNode = document.getElementById('root'),
    todoItems = [];
let listItemsString = '';

for (let i = 0; i < localStorage.length; i++) {
    let returnObj = JSON.parse(localStorage.getItem('key' + i));
    todoItems.push(returnObj);
}
if (localStorage.length > 1) {
    for (const data of todoItems) {
        listItemsString += `
<div class="main-page-list-item" id="${data.id}">    
<input type="checkbox" onclick="checkDoneTask(this)">
<label class="main-page-list-item-text" onclick="openModifyPage(this)">${data.description}</label>
<button onclick="deleteTask(this)">X</button></div>`;
    }
}

rootNode.innerHTML = `
<section class="main-page">
<h2 class="main-page-headline">Simple TODO application</h2>
<button onclick="openAddTaskPage()">Add new task</button>
<div class="main-page-list">
<p class="main-page-list-empty">TODO is empty</p>
${listItemsString}
</div>
</section>`;

const mainPage = rootNode.querySelector('.main-page'),
    listArea = rootNode.querySelector('.main-page-list'),
    emptyListText = listArea.querySelector('.main-page-list-empty'),
    addPage = document.createElement('section'),
    modifyPage = document.createElement('section');
let modifyText, oldDiv, taskId = 0;

checkEmptyList();
rootNode.appendChild(addPage);
rootNode.appendChild(modifyPage);
addPage.className = 'add-task-page';
modifyPage.className = 'modify-task-page';
addPage.style.display = 'none';
modifyPage.style.display = 'none';
addPage.innerHTML = `
<h2 class="add-task-page-headline">Add task</h2>
<input class="add-task-page-input" type="text">
<button onclick="openMainPage()">Cancel</button>
<button onclick="addTask()">Save changes</button>`;

function checkEmptyList() {
    if (listArea.children.length !== 1) {
        emptyListText.style.display = 'none';
    } else {
        emptyListText.style.display = 'block';
    }
}

function openAddTaskPage() {
    location.hash = '/add';
}

function openMainPage() {
    location.hash = '';
}

function openModifyPage(input) {
    let taskId = input.parentElement.id;
    location.hash = '/modify/:' + taskId;
    modifyText = input.textContent;
    oldDiv = input.parentElement;
    modifyPage.innerHTML = `
<h2 class="add-task-page-headline">Modify item</h2>
<input class="add-task-page-input" type="text" value="${modifyText}">
<button onclick="openMainPage()">Cancel</button>
<button onclick="modifyTask()">Save changes</button>`;
}

function addTask() {
    let taskText = addPage.querySelector('.add-task-page-input'),
        tasksList = mainPage.querySelectorAll('.main-page-list-item-text'),
        addStatus = true;
    if (!taskText.value) {
        alert('Task is empty. ' +
            'Write a task before adding it.');
    } else {
        for (const task of tasksList) {
            let text = task.textContent.replace(/\s+/g, ''),
                addTaskText = '^' + taskText.value + '$';
            if (text.match(addTaskText)) {
                alert('Error! You can\'t add already exist item');
                addStatus = false;
            }
        }
        if (addStatus) {
            let div = document.createElement('div');
            div.classList.add('main-page-list-item');
            div.id = taskId++;
            div.innerHTML = `
<input type="checkbox" onclick="checkDoneTask(this)">
<label class="main-page-list-item-text" onclick="openModifyPage(this)">${taskText.value}</label>
<button onclick="deleteTask(this)">X</button>`;
            listArea.appendChild(div);
            openMainPage();
            checkEmptyList();
            let dataObject = {
                    isDone: false,
                    id: div.id,
                    description: taskText.value
                },
                convertData = JSON.stringify(dataObject);
            todoItems.push(dataObject);
            localStorage.setItem('key' + div.id, convertData);
        }
    }
}

function checkDoneTask(input) {
    let div = input.parentElement;
    if (input.checked) {
        input.parentElement.style.backgroundColor = 'grey';
        input.parentElement.remove();
        listArea.appendChild(div);
    } else {
        input.parentElement.style.backgroundColor = 'white';
    }
}

function modifyTask() {
    let taskText = modifyPage.querySelector('.add-task-page-input'),
        tasksList = mainPage.querySelectorAll('.main-page-list-item-text'),
        addStatus = true;
    if (!taskText.value) {
        alert('Task is empty. ' +
            'Write a task before adding it.');
    } else {
        for (const task of tasksList) {
            let text = task.textContent.replace(/\s+/g, ''),
                addTaskText = '^' + taskText.value + '$';
            if (text.match(addTaskText)) {
                alert('Error! You can\'t add already exist item');
                addStatus = false;
            }
        }
        if (addStatus) {
            let div = document.createElement('div');
            div.classList.add('main-page-list-item');
            div.id = oldDiv.id;
            div.innerHTML = `
<input type="checkbox" onclick="checkDoneTask(this)">
<label class="main-page-list-item-text" onclick="openModifyPage(this)">${taskText.value}</label>
<button onclick="deleteTask(this)">X</button>`;
            listArea.replaceChild(div, oldDiv);
            openMainPage();
            for (const data of todoItems) {
                if (data.id === div.id) {
                    data.description = taskText.value;
                    localStorage['key' + div.id] = JSON.stringify(data);
                }
            }
        }
    }
}

function deleteTask(input) {
    let div = input.parentElement;
    for (const data of todoItems) {
        if (data.id === div.id) {
            delete data.isDone;
            delete data.id;
            delete data.description;
            delete localStorage['key' + div.id];
        }
    }
    div.remove();
    checkEmptyList();
}

window.addEventListener('hashchange', function () {
    switch (location.hash) {
        case '#/add':
            addPage.style.display = 'block';
            mainPage.style.display = 'none';
            modifyPage.style.display = 'none';
            break;
        case '':
            mainPage.style.display = 'block';
            modifyPage.style.display = 'none';
            addPage.style.display = 'none';
            break;
        default:
            modifyPage.style.display = 'block';
            mainPage.style.display = 'none';
            addPage.style.display = 'none';
    }
});