const todos = [
    {
        title: 'wakeup early - makes my day long',
        completed: true
    },
    {
        title: 'exercise - keeps me active',
        completed: true
    },
    {
        title: 'cook food, for my sister',
        completed: false
    },
    {
        title: 'read book - Abdul Kalam',
        completed: true
    },
    {
        title: 'do work - improve productivity',
        completed: false
    }
];

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

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompletedTodo = filteredTodos.filter((todo) => {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const status = document.createElement('h2');
    status.textContent = `You have ${incompletedTodo.length} todos left`;
    document.querySelector('#todos').appendChild(status);

    filteredTodos.forEach((todo) => {
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.title;
        document.querySelector('#todos').appendChild(todoEl);
    })

}

renderTodos(todos, filters);

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = {
        title: e.target.elements.todoValue.value,
        completed: false
    }
    todos.push(newTodo);
    e.target.elements.todoValue.value = '';
    renderTodos(todos, filters);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#hideCompleted').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})
