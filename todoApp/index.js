const todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

const notes = [
    {
        title: 'my next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'habbits to work on',
        body: 'Exercise, Eating a bit better'
    },
    {
        title: 'Office modifications',
        body: 'Got a new seat'
    }
]

renderTodos(todos, filters);

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = {
        id: uuidv4(),
        title: e.target.elements.todoValue.value,
        completed: false,
    }
    todos.push(newTodo);

    saveTodos(todos);
    e.target.elements.todoValue.value = '';
    location.assign(`./edit.html#${newTodo.id}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#hideCompleted').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})
