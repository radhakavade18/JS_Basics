// get the saved todos from localStorage
const getSavedTodos = () => {
    // create existing data 
    const todosJSON = localStorage.getItem('todos');

    // if there is not todos in localstorage then it will give us null
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return []
    }
}

// save todo to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// remove todos 
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

// toggle todo
const toggleTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id)

    if (findTodo !== undefined) {
        findTodo.completed = !findTodo.completed
    }
}

// get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkBox);
    checkBox.checked = todo.completed;
    checkBox.addEventListener('change', (e) => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    const btn = document.createElement('button');
    btn.textContent = 'x';

    const text = document.createElement('a');
    text.setAttribute('href', `./edit.html#${todo.id}`)

    if (todo.title.length > 0) {
        text.textContent = todo.title;
    } else {
        text.textContent = 'Unnamed todo';
    }
    todoEl.appendChild(text);
    todoEl.appendChild(btn);
    btn.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    return todoEl;
}

// get the DOM element for list summery
const generateSummeryDOM = function (incompletedTodo) {
    const status = document.createElement('h2');
    status.textContent = `You have ${incompletedTodo.length} todos left`;
    document.querySelector('#todos').appendChild(status);
}

// render todo application based on filter
const renderTodos = function (todos, filters) {
    console.log(todos);
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompletedTodo = filteredTodos.filter((todo) => {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    generateSummeryDOM(incompletedTodo);

    filteredTodos.forEach((todo) => {
        const todoEl = generateTodoDOM(todo);

        document.querySelector('#todos').appendChild(todoEl);
    })

}

// generete UUID
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}