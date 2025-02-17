function initFiltering(){
        // --- Filtering Functionality ---
        const filterAll = document.getElementById('filter-all');
        const filterActive = document.getElementById('filter-active');
        const filterCompleted = document.getElementById('filter-completed');

        function updateFilters(filter) {
        taskList.querySelectorAll('li').forEach(li => {
            const checkbox = li.querySelector('input[type="checkbox"]');
            if (filter === 'all') {
            li.style.display = '';
            } else if (filter === 'active') {
            li.style.display = checkbox.checked ? 'none' : '';
            } else if (filter === 'completed') {
            li.style.display = checkbox.checked ? '' : 'none';
            }
        });
        }

        filterAll.addEventListener('click', () => updateFilters('all'));
        filterActive.addEventListener('click', () => updateFilters('active'));
        filterCompleted.addEventListener('click', () => updateFilters('completed'));

        // --- Clear Completed Tasks ---
        const clearCompletedBtn = document.getElementById('clear-completed');
        clearCompletedBtn.addEventListener('click', function() {
        taskList.querySelectorAll('li').forEach(li => {
            const checkbox = li.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
            li.remove();
            }
        });
        saveTasks();
        });

}

export {initFiltering}