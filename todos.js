var listTodos = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.getElementById('btnAdd');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Publicar projetos no GitHub'
];

function renderToDos(){
    listTodos.innerHTML = '';
    for (todo of todos){
        var tempElement = document.createElement('li');
        var content = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')')

        listTodos.appendChild(tempElement);
        listTodos.appendChild(content);
        listTodos.appendChild(linkElement);
    }
}

renderToDos();

function addTodo(){
    var todoText = inputElement.value;

    if (todoText !== ''){
        todos.push(todoText);
        inputElement.value = '';
        renderToDos();
    }
}

buttonElement.addEventListener('click', addTodo);

function deleteToDo(pos){
    todos.splice(pos, 1);
    renderToDos();
}