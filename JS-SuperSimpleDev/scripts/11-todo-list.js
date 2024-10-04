const todoList = [{
    name: 'go gym',
    date : '2024-12-22'
}];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject['name'];
    // const date = todoObject['date'];
    const{name, date} = todoObject;
    const HTML = `<div>${name} </div>
    <div>${date} </div>
    <button class="js-todo-delete" onclick="deleteData(${i})">Delete</button>  `;
    todoListHTML += HTML;
  }
  document.querySelector(".todo-list").innerHTML = todoListHTML;
  console.log(todoListHTML);
}

renderTodoList();

function addData() {
  const name = document.querySelector(".js-name-input").value;
  const date = document.querySelector(".todo-date").value;
 
todoList.push({
    name:name,
    date:date
})

  document.querySelector(".js-name-input").value = "";
  renderTodoList();
}

function deleteData(index) {
  todoList.splice(index, 1);
  renderTodoList();
}
