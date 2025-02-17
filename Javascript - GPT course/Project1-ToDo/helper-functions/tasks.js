// tasks.js

// Select DOM elements here so they are available in this module
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Drag & Drop variables and functions
let draggedItem = null;

function handleDragStart(event) {
  draggedItem = event.currentTarget;
  event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  if (draggedItem !== event.currentTarget) {
    taskList.insertBefore(draggedItem, event.currentTarget);
    saveTasks();
  }
}

function saveTasks() {
  const taskList = document.getElementById('task-list'); // Query the DOM here
  if (!taskList) return; // Ensure it exists
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    const taskText = li.querySelector('span').textContent;
    const isCompleted = li.querySelector('input[type="checkbox"]').checked;
    tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Function to load tasks from localStorage on page load
function loadTasks() {
  const taskList = document.getElementById('task-list');
  if (!taskList) return;

  const tasksJSON = localStorage.getItem('tasks');
  if (!tasksJSON) return;
  
  const tasks = JSON.parse(tasksJSON);
  tasks.forEach(task => {
    const li = document.createElement('li');

    // Create and configure the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;
    if (task.completed) {
      taskSpan.classList.add('completed');
    }

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.classList.add('delete-mark');

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    // Delete the task when the delete button is clicked
    deleteButton.addEventListener('click', function() {
      li.remove();
      saveTasks();
    });

    // Toggle the completed style when the checkbox changes
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        taskSpan.classList.add('completed');
      } else {
        taskSpan.classList.remove('completed');
      }
      saveTasks();
    });

    taskList.appendChild(li);
  });
}


// Function to set up creating new tasks (attaches an event listener to the form)
function createTaskElement() {
  const todoForm = document.getElementById('todo-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (!todoForm || !taskInput || !taskList) return;

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Prevent adding empty tasks

    // Create a new list item for the task
    const tempItem = document.createElement('li');

    // Create a checkbox for marking completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a span to display the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Append the checkbox and text to the list item
    tempItem.appendChild(checkbox);
    tempItem.appendChild(taskSpan);

    // Create a delete button and add it to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.classList.add('delete-mark');
    tempItem.appendChild(deleteButton);

    // Delete the task when the button is clicked
    deleteButton.addEventListener('click', function() {
      tempItem.remove();
      saveTasks();
    });

    // Toggle completed style when the checkbox state changes
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        taskSpan.classList.add('completed');
      } else {
        taskSpan.classList.remove('completed');
      }
      saveTasks();
    });

    // Append the new task to the task list and clear the input
    taskList.appendChild(tempItem);
    taskInput.value = '';
    saveTasks();
  });
}

export { createTaskElement, saveTasks, loadTasks };
