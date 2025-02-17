// tasks.js

describe('Dummy test', () => {
    test('true is true', () => {
      expect(true).toBe(true);
    });
  });
  

function saveTasks() {
    const taskList = document.getElementById('task-list');
    if (!taskList) return;
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
      const taskText = li.querySelector('span').textContent;
      const isCompleted = li.querySelector('input[type="checkbox"]').checked;
      tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function createTaskElement() {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    if (!todoForm || !taskInput || !taskList) return;
  
    // Attach form submit event listener
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page reload
  
      const taskText = taskInput.value.trim();
      if (taskText === '') return; // Prevent adding empty tasks
  
      const tempItem = document.createElement('li'); // Create a new list item
  
      // Create checkbox for marking completion
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // Create a span to display the task text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      // Append checkbox and task text to the list item
      tempItem.appendChild(checkbox);
      tempItem.appendChild(taskSpan);
  
      // Task deletion functionality
      const deleteMark = document.createElement('button');
      deleteMark.textContent = '✖';
      deleteMark.classList.add('delete-mark');
      tempItem.appendChild(deleteMark);
  
      deleteMark.addEventListener('click', function() {
        tempItem.remove();
        saveTasks();
      });
  
      // Listen for checkbox state changes
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          taskSpan.classList.add('completed');
        } else {
          taskSpan.classList.remove('completed');
        }
        saveTasks();
      });
  
      taskList.appendChild(tempItem); // Add the new list item to the task list
      taskInput.value = ''; // Clear the input field
      saveTasks(); // Save the updated list to localStorage
    });
  }
  
  // Export your functions
  export { createTaskElement, saveTasks /*, loadTasks, etc. */ };
  