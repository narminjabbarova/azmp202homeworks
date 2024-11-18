const todos = [];
const added = document.querySelector(".added")
const add = document.querySelector(".add")
const inputdo = document.querySelector(".todo")

function doingadd(){
    const todoText = inputdo.value.trim()
    const todorow = document.createElement("div")
    todorow.classList.add("block");
    todorow.innerHTML=`
    <input type="checkbox" class="scales" />
    <h2>${todoText}</h2>
    `
    added.appendChild(todorow)
    inputdo.value = "";
    todos.push(todoText)

    const checkbox = todorow.querySelector(".scales")
    const checktext = todorow.querySelector(".block h2")

    checkbox.addEventListener("click", function(){
        if(checkbox.checked){
            checktext.style.textDecoration = "line-through";
        }
        else{
            checktext.style.textDecoration = "none";
        }
    })
}
add.addEventListener("click", doingadd)