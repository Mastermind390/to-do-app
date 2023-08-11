const todoList = JSON.parse(localStorage.getItem('todoList'));

renderToDoList();

function renderToDoList() {
    
    let toDolistHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <p>${name} ${dueDate}
            <button onclick="
            todoList.splice(${i}, 1);
            renderToDoList();
            ">
                Delete
            </button>
        </p>`;
        toDolistHtml += html;
    }
   // console.log(toDolistHtml);
    const todoContainerEl = document.getElementById('todo-container')
    todoContainerEl.innerHTML = toDolistHtml;
}

function addToDo() {
    const todoNameEl = document.getElementById('js-todo-name');
    const dueDateEl = document.getElementById('js-date-input');

    const name = todoNameEl.value;
    const dueDate = dueDateEl.value;
    todoList.push(
        {name: name, 
        dueDate: dueDate}
        );
    todoNameEl.value = '';
    dueDateEl.value = '';
    renderToDoList();

    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}



