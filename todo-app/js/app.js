function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a todo');
        return;
    }

    const todoList = document.getElementById('todoList');

    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
}
