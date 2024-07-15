document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      const taskText = taskInput.value.trim();

      // Check if task text is not empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';

      // Assign an onclick event to the remove button
      removeButton.onclick = () => {
          taskList.removeChild(li);
      };

      // Append the remove button to the list item
      li.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(li);

      // Clear the task input field
      taskInput.value = '';
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});