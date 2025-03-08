const input = document.querySelector("input"); // Select the input element
const button = document.querySelector("button"); // Select the button element
const list = document.querySelector("ul"); // Select the ul element

// Retrieve tasks from localStorage or initialize an empty array if no tasks are found
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks on the page
const renderTasks = () => {
    list.innerHTML = ''; // Clear the current list
    tasks.forEach(task => {
        const li = document.createElement('li'); // Create a new list item
        li.className = 'list-group-item'; // Add class to the list item
        const btn = document.createElement('button'); // Create a delete button
        btn.className = 'btn-danger'; // Add class to the button
        btn.textContent = 'Delete'; // Set button text
        li.textContent = task; // Set list item text to the task
        li.appendChild(btn); // Append the button to the list item
        list.appendChild(li); // Append the list item to the ul

        // Add event listener to the delete button
        btn.addEventListener('click', () => {
            list.removeChild(li); // Remove the list item from the ul
            tasks = tasks.filter(t => t !== task); // Remove the task from the tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
        });
    });
};

// Add event listener to the add button
button.addEventListener('click', () => {
    const text = input.value; // Get the value from the input
    if (text === "") {
        return; // If the input is empty, do nothing
    }
    tasks.push(text); // Add the new task to the tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
    renderTasks(); // Re-render the tasks
    input.value = ''; // Clear the input
});

// Initial render of tasks when the page loads
renderTasks();

