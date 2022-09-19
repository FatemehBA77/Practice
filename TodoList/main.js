const btnAdd = document.querySelector(".img-btn");
const inputTodo = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-container");
const filterOption = document.querySelector(".filter-todo");
const todoList2 = document.querySelector(".todo");
btnAdd.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);
document.addEventListener("DOMContentLoaded", getLocalTodos);
function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `
  <li class="todo-task">${inputTodo.value}</li>
  <li><img class="check" src="/TodoList/assets/images/Tick Square.svg" alt=""/></li>
  <li><img class="delete" src="/TodoList/assets/images/Delete.svg" alt="" /></li>`;
  todoDiv.innerHTML = newTodo;
  todoList.appendChild(todoDiv);
  saveLocalTodo(inputTodo.value);
  inputTodo.value = " ";
}
function checkDelete(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  if (classList[0] === "check") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("completed");
  } else if (classList[0] === "delete") {
    const todo = item.parentElement.parentElement;
    removeLocalTodo(todo);
    todo.remove();
  }
}
// filterOption.addEventListener("click", filterTodo);
// function filterTodo(e) {
//   const todos = [...todoList.childNodes];
//   todos.forEach((todo) => {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "compelet":
//         if (todo.classList.contains("compelet")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompelet":
//         if (!todo.classList.contains("compelet")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//     }
//   });
// }

// localstorage

function saveLocalTodo(todo) {
  // localStorage.getItem("todos");
  // localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todo);
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}
function getLocalTodos() {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = `
    <li class="todo-task">${todo}</li>
    <li><img class="check" src="/TodoList/assets/images/Tick Square.svg" alt=""/></li>
    <li><img class="delete" src="/TodoList/assets/images/Delete.svg" alt="" /></li>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
  });
}
function removeLocalTodo(todo) {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const filterTodos = savedTodos.filter((t) => {
    t != todo.children[0].innerText;
  });
  localStorage.setItem("todos", JSON.stringify(filterTodos));
}
