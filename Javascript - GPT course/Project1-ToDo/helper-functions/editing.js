
function initEditing(){
        // Event: Editing task text on double-click
        taskList.addEventListener('dblclick', function(e) {
            if (e.target && e.target.tagName === 'SPAN') {
            const span = e.target;
            const currentText = span.textContent;
        
        // Create an input field pre-filled with current text
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        
        // Replace the span with the input field
        span.replaceWith(input);
        input.focus();
    
        // Finalize edit function
        function finishEdit() {
            let newText = input.value.trim();
            if (newText === '') {
            newText = currentText; // revert if empty
            }
            const newSpan = document.createElement('span');
            newSpan.textContent = newText;
            
            // Preserve completed state if checkbox is checked
            const checkbox = input.parentElement.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
            newSpan.classList.add('completed');
            }
            input.replaceWith(newSpan);
            saveTasks();
        }
    
        input.addEventListener('blur', finishEdit);
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
            finishEdit();
                }
        });
        }
    });
}

  export {initEditing}