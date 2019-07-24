const maxTaskNumber = 10;
let rootNode = document.getElementById('root'),
    addTaskField = document.querySelector('.list-add-input'),
    addButton = document.querySelector('.add'),
    listArea = document.querySelector('.list-area'),
    allListItems = document.querySelectorAll('.list-area-item'),
    source;

function changeAddButtonColor() {
    if (addTaskField.value) {
        addButton.style.color = '#89c4f4';
    } else {
        addButton.style.color = '#c8d0d8';
    }
}

function addTask() {
    allListItems = document.querySelectorAll('.list-area-item');
    if (!addTaskField.value) {
        alert('Task is empty. ' +
            'Write a task before adding it.');
    } else if (allListItems.length >= maxTaskNumber) {
        addTaskField.setAttribute('disabled', '');
        addButton.removeEventListener('click', addTask);
        addButton.style.color = '#c8d0d8';
        return alert('Maximum item per list are created');
    } else {
        let div = document.createElement('div');
        div.classList.add('list-area-item');
        div.setAttribute('draggable', 'true');
        div.setAttribute('ondragstart', 'drag(event)');
        div.innerHTML =
            `<label class="list-area-item-label">
  <input class="list-mark" type="checkbox" onclick="checkDoneTask(this)">
  <i class="material-icons not-marked">check_box_outline_blank</i>
  <i class="material-icons marked">check_box</i>
  <span class="list-area-item-label-text">${addTaskField.value}</span>
</label>
<i class="material-icons edit" onclick="editTask(this)">edit</i>
<i class="material-icons delete" onclick="deleteTask(this)">delete</i>`
        listArea.appendChild(div);
    }
}

function checkDoneTask(input) {
    if (input.checked) {
        input.setAttribute('disabled', '');
        input.setAttribute('checked', '');
    }
}

function editTask(input) {
    let div = input.parentElement,
        text = div.querySelector('.list-area-item-label-text').textContent;
    div.innerHTML =
        `<input class="list-edit" type="text" value="${text}">
    <i class="material-icons save" onclick="saveTask(this)">save</i>`;
}

function saveTask(input) {
    let div = input.parentElement,
        text = div.querySelector('.list-edit').value;
    div.innerHTML =
        `<label class="list-area-item-label">
  <input class="list-mark" type="checkbox" onclick="checkDoneTask(this)">
  <i class="material-icons not-marked">check_box_outline_blank</i>
  <i class="material-icons marked">check_box</i>
  <span class="list-area-item-label-text">${text}</span>
</label>
<i class="material-icons edit" onclick="editTask(this)">edit</i>
<i class="material-icons delete" onclick="deleteTask(this)">delete</i>`
}

function deleteTask(input) {
    let div = input.parentElement;
    div.remove();
    allListItems = document.querySelectorAll('.list-area-item');
    if (allListItems.length < maxTaskNumber) {
        addTaskField.removeAttribute('disabled', '');
        addButton.addEventListener('click', addTask);
        changeAddButtonColor();
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    source = ev.target;
    source.style.backgroundColor = 'azure';
    ev.dataTransfer.setData('text/plain', ev.target.innerHTML);
    ev.dataTransfer.effectAllowed = 'move';
}

function drop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    source.innerHTML = ev.target.innerHTML;
    ev.target.innerHTML = ev.dataTransfer.getData('text/plain');
    source.style.backgroundColor = 'white';
}

addTaskField.addEventListener('input', changeAddButtonColor);
addButton.addEventListener('click', addTask);