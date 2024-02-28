const todoId = location.hash.substring(1);

console.log(todoId);

const todos = getSavedTodos();

const todo = todos.find((todo) => {
    return todo.id === todoId;
})

if (todo === undefined) {
    location.assign('./index.html');
}

const todoTitle = document.getElementById('todo-item');
todoTitle.value = todo.title;

todoTitle.addEventListener('input', (e) => {
    todo.title = e.target.value;
    saveTodos(todos);
})

const btn = document.getElementById('remove-todo');

btn.addEventListener('click', () => {
    removeTodo(todoId);
    saveTodos(todos);
    location.assign('./index.html');
})