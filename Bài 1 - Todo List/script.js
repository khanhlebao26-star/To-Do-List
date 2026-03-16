const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

function rendertask() {
    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    tasks.push(taskText);
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = taskText;
    checkbox.addEventListener('change', function (e) {
        span.classList.toggle("completed");
    })
    const btn_delete = document.createElement("button");
    btn_delete.textContent = 'x';
    btn_delete.addEventListener('click', function (e) {
        removeTask(li);
    })
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn_delete);
    taskList.appendChild(li);
    input.value = '';

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    rendertask();
});

function removeTask(taskElment) {
    taskList.removeChild(taskElment);
}