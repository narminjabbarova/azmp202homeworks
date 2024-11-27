import { Todo } from "./data.js"

const todoInput = document.querySelector(".todo-input")
const addBtn = document.querySelector(".to-add")
const allTodosBtn = document.querySelector(".all-todo")
const completedTodosBtn = document.querySelector(".completed")
const pendingTodosBtn = document.querySelector(".pending")
const clearTodosBtn = document.querySelector(".clear")
const todoList = document.querySelector(".todo-list")
const inputError = document.querySelector(".error-input")


const allTodos = [];
console.log(todoList);


addBtn.addEventListener("click", function () {
    // const todo = {
    // id:Date.now(),
    // todoText: todoInput.value.trim(),
    // isCompleted: false,
    // createdAt: new Date().toLocaleString(),
    // }
    if(valid()){

        const todo = new Todo(todoInput.value.trim());
        allTodos.push(todo);
        renderTodos(allTodos);
        todoInput.classList.remove("border-input")
        inputError.classList.replace("d-block", "d-none")


    }
    else{
        todoInput.classList.add("border-input")
        inputError.classList.replace("d-none", "d-block")
    }



    resetInput();
});

function renderTodos(todosArr) {
    if (!Array.isArray(todosArr)) {
        console.error("todosArr is not an array:", todosArr);
        return;
    }
    todoList.innerHTML = "";
    todosArr.forEach((todo) => {
        const liElem = document.createElement("li");
        liElem.className = "list-group-item list-group-item-success mb-3 d-flex justify-content-between align-items-center";
        liElem.innerHTML = `
         <div class="d-flex align-items-center gap-2">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
                    <p>${todo.todoText} <i>${todo.createdAt}</i></p>
                </div>

                <div class="actions">
                    <button class="btn btn-success edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></button>
                </div>
        `;
        todoList.appendChild(liElem);
    });
}

//reset

function resetInput() {
    todoInput.value = "";
}

function valid() {
    let isValid = true
    if (todoInput.value.trim() === ""){
        isValid = false
    }
    return isValid;
}