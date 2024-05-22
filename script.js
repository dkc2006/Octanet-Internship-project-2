document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    function removeTask(e) {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});
