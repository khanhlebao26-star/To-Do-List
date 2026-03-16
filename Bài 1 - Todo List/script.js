const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

function addtask() {
    const taskText = input.value.trim();
    tasks.push(taskText);
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    input.value = '';
}