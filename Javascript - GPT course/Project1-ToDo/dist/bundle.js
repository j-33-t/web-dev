/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./helper-functions/editing.js":
/*!*************************************!*\
  !*** ./helper-functions/editing.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initEditing: () => (/* binding */ initEditing)\n/* harmony export */ });\n\nfunction initEditing(){\n        // Event: Editing task text on double-click\n        taskList.addEventListener('dblclick', function(e) {\n            if (e.target && e.target.tagName === 'SPAN') {\n            const span = e.target;\n            const currentText = span.textContent;\n        \n        // Create an input field pre-filled with current text\n        const input = document.createElement('input');\n        input.type = 'text';\n        input.value = currentText;\n        \n        // Replace the span with the input field\n        span.replaceWith(input);\n        input.focus();\n    \n        // Finalize edit function\n        function finishEdit() {\n            let newText = input.value.trim();\n            if (newText === '') {\n            newText = currentText; // revert if empty\n            }\n            const newSpan = document.createElement('span');\n            newSpan.textContent = newText;\n            \n            // Preserve completed state if checkbox is checked\n            const checkbox = input.parentElement.querySelector('input[type=\"checkbox\"]');\n            if (checkbox && checkbox.checked) {\n            newSpan.classList.add('completed');\n            }\n            input.replaceWith(newSpan);\n            saveTasks();\n        }\n    \n        input.addEventListener('blur', finishEdit);\n        input.addEventListener('keydown', function(event) {\n            if (event.key === 'Enter') {\n            finishEdit();\n                }\n        });\n        }\n    });\n}\n\n  \n\n//# sourceURL=webpack://project1-todo/./helper-functions/editing.js?");

/***/ }),

/***/ "./helper-functions/filtering.js":
/*!***************************************!*\
  !*** ./helper-functions/filtering.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFiltering: () => (/* binding */ initFiltering)\n/* harmony export */ });\nfunction initFiltering(){\n        // --- Filtering Functionality ---\n        const filterAll = document.getElementById('filter-all');\n        const filterActive = document.getElementById('filter-active');\n        const filterCompleted = document.getElementById('filter-completed');\n\n        function updateFilters(filter) {\n        taskList.querySelectorAll('li').forEach(li => {\n            const checkbox = li.querySelector('input[type=\"checkbox\"]');\n            if (filter === 'all') {\n            li.style.display = '';\n            } else if (filter === 'active') {\n            li.style.display = checkbox.checked ? 'none' : '';\n            } else if (filter === 'completed') {\n            li.style.display = checkbox.checked ? '' : 'none';\n            }\n        });\n        }\n\n        filterAll.addEventListener('click', () => updateFilters('all'));\n        filterActive.addEventListener('click', () => updateFilters('active'));\n        filterCompleted.addEventListener('click', () => updateFilters('completed'));\n\n        // --- Clear Completed Tasks ---\n        const clearCompletedBtn = document.getElementById('clear-completed');\n        clearCompletedBtn.addEventListener('click', function() {\n        taskList.querySelectorAll('li').forEach(li => {\n            const checkbox = li.querySelector('input[type=\"checkbox\"]');\n            if (checkbox && checkbox.checked) {\n            li.remove();\n            }\n        });\n        saveTasks();\n        });\n\n}\n\n\n\n//# sourceURL=webpack://project1-todo/./helper-functions/filtering.js?");

/***/ }),

/***/ "./helper-functions/tasks.js":
/*!***********************************!*\
  !*** ./helper-functions/tasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskElement: () => (/* binding */ createTaskElement),\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks),\n/* harmony export */   saveTasks: () => (/* binding */ saveTasks)\n/* harmony export */ });\n// tasks.js\n\n// Select DOM elements here so they are available in this module\nconst todoForm = document.getElementById('todo-form');\nconst taskInput = document.getElementById('task-input');\nconst taskList = document.getElementById('task-list');\n\n// Drag & Drop variables and functions\nlet draggedItem = null;\n\nfunction handleDragStart(event) {\n  draggedItem = event.currentTarget;\n  event.dataTransfer.effectAllowed = 'move';\n}\n\nfunction handleDragOver(event) {\n  event.preventDefault();\n  event.dataTransfer.dropEffect = 'move';\n}\n\nfunction handleDrop(event) {\n  event.preventDefault();\n  if (draggedItem !== event.currentTarget) {\n    taskList.insertBefore(draggedItem, event.currentTarget);\n    saveTasks();\n  }\n}\n\n// Function to save tasks to localStorage\nfunction saveTasks() {\n  const tasks = [];\n  taskList.querySelectorAll('li').forEach(li => {\n    const taskText = li.querySelector('span').textContent;\n    const isCompleted = li.querySelector('input[type=\"checkbox\"]').checked;\n    tasks.push({ text: taskText, completed: isCompleted });\n  });\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\n// Function to load tasks from localStorage on page load\nfunction loadTasks() {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  if (tasks) {\n    tasks.forEach(task => {\n      const li = document.createElement('li');\n      li.setAttribute('draggable', 'true');\n      li.addEventListener('dragstart', handleDragStart);\n      li.addEventListener('dragover', handleDragOver);\n      li.addEventListener('drop', handleDrop);\n\n      const checkbox = document.createElement('input');\n      checkbox.type = 'checkbox';\n      checkbox.checked = task.completed;\n\n      const taskSpan = document.createElement('span');\n      taskSpan.textContent = task.text;\n      if (task.completed) taskSpan.classList.add('completed');\n\n      const deleteMark = document.createElement('button');\n      deleteMark.textContent = '✖';\n      deleteMark.classList.add('delete-mark');\n\n      li.appendChild(checkbox);\n      li.appendChild(taskSpan);\n      li.appendChild(deleteMark);\n\n      checkbox.addEventListener('change', function() {\n        if (checkbox.checked) {\n          taskSpan.classList.add('completed');\n        } else {\n          taskSpan.classList.remove('completed');\n        }\n        saveTasks();\n      });\n\n      deleteMark.addEventListener('click', function() {\n        li.remove();\n        saveTasks();\n      });\n\n      taskList.appendChild(li);\n    });\n  }\n}\n\n// Function to set up creating new tasks (attaches an event listener to the form)\nfunction createTaskElement() {\n  todoForm.addEventListener('submit', function(event) {\n    event.preventDefault(); // Prevent page reload\n\n    const taskText = taskInput.value.trim();\n    if (taskText === '') return; // Prevent adding empty tasks\n\n    const tempItem = document.createElement('li');\n    tempItem.setAttribute('draggable', 'true');\n    tempItem.addEventListener('dragstart', handleDragStart);\n    tempItem.addEventListener('dragover', handleDragOver);\n    tempItem.addEventListener('drop', handleDrop);\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n\n    const taskSpan = document.createElement('span');\n    taskSpan.textContent = taskText;\n\n    tempItem.appendChild(checkbox);\n    tempItem.appendChild(taskSpan);\n\n    const deleteMark = document.createElement('button');\n    deleteMark.textContent = '✖';\n    deleteMark.classList.add('delete-mark');\n    tempItem.appendChild(deleteMark);\n\n    deleteMark.addEventListener('click', function() {\n      tempItem.remove();\n      saveTasks();\n    });\n\n    checkbox.addEventListener('change', function() {\n      if (checkbox.checked) {\n        taskSpan.classList.add('completed');\n      } else {\n        taskSpan.classList.remove('completed');\n      }\n      saveTasks();\n    });\n\n    taskList.appendChild(tempItem);\n    taskInput.value = '';\n    saveTasks();\n  });\n}\n\n\n\n\n//# sourceURL=webpack://project1-todo/./helper-functions/tasks.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_functions_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/tasks.js */ \"./helper-functions/tasks.js\");\n/* harmony import */ var _helper_functions_filtering_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/filtering.js */ \"./helper-functions/filtering.js\");\n/* harmony import */ var _helper_functions_editing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-functions/editing.js */ \"./helper-functions/editing.js\");\n// main.js\n\n\n\n\n// --- Additional DOM Selections in main.js ---\nconst taskList = document.getElementById('task-list');\n\n// Load tasks from localStorage when the page loads\n(0,_helper_functions_tasks_js__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\n\n// Set up task creation (attaches the event listener to the form)\n(0,_helper_functions_tasks_js__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)();\n\n// Enables editing task\n(0,_helper_functions_editing_js__WEBPACK_IMPORTED_MODULE_2__.initEditing)();\n\n\n// Enables filtering task based on the status\n(0,_helper_functions_filtering_js__WEBPACK_IMPORTED_MODULE_1__.initFiltering)();\n\n//# sourceURL=webpack://project1-todo/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;