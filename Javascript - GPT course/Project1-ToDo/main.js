// main.js
import { createTaskElement, loadTasks, saveTasks } from "./helper-functions/tasks.js";
import {initFiltering} from "./helper-functions/filtering.js"
import { initEditing } from "./helper-functions/editing.js";

// --- Additional DOM Selections in main.js ---
const taskList = document.getElementById('task-list');

// Load tasks from localStorage when the page loads
loadTasks();

// Set up task creation (attaches the event listener to the form)
createTaskElement();

// Enables editing task
initEditing();


// Enables filtering task based on the status
initFiltering();