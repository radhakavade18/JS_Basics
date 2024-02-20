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

console.log(true - false);

// sort todos
const sortTodos = function (todos) {
    return todos.sort((a, b) => a.completed - b.completed);
}
console.log(sortTodos(todos));

// get uncompleted todos
const getThingsToDo = function (todos) {
    return todos.filter((todo) => !todo.completed)
}
//console.log(getThingsToDo(todos));

// search from todos
const searchTodos = function (todos, query) {
    return todos.filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()))
}

//console.log(searchTodos(todos, 'exercise'));
// remove todo by text value
const removeTodo = function (todos, title) {
    const findTodo = todos.findIndex((todo) => {
        return todo.title.toLowerCase() === title.toLowerCase()
    })

    todos.splice(findTodo, 1);
}

//removeTodo(todos, 'do work - improve productivity');

console.log(todos);
console.log(todos.length);

// todos.forEach((item, index) => {
//     const num = index + 1;
//     console.log(`${num}. ${item}`);
// })

// for(let i = 0; i < todos.length; i++){
//     console.log(`${i+1}. ${todos[i]}`);
// }