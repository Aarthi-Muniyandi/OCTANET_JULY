#APP.JS:


document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    //const dueDate = document.getElementById('dueDate');
    const priority = document.getElementById('priority');
    const category = document.getElementById('category');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, priority.value, category.value);
        taskInput.value = '';
        priority.value = 'low';
        category.value = 'work';
    });

    function addTask(task, priority, category) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskInfo = document.createElement('div');
        taskInfo.className = 'task-info';
        taskInfo.innerHTML = `<strong>${task}</strong>
                              <span class="priority ${priority}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
                              <span class="category">${category.charAt(0).toUpperCase() + category.slice(1)}</span>`;
        li.appendChild(taskInfo);

        const completeButton = document.createElement('button');
        completeButton.className = 'complete-button';
        completeButton.textContent = '✔';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = '×';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
