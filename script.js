// Get elements from the DOM
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
  const taskText = inputField.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  deleteButton.addEventListener('click', () => listItem.remove());

  // Toggle completed status
  listItem.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Clear input field
  inputField.value = '';
}

// Event listeners
addButton.addEventListener('click', addTask);
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
