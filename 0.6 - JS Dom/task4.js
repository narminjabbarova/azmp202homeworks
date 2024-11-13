const buttonn = document.querySelector(".btn")
const menu = document.querySelector(".menu")
const x = document.querySelector("span")

buttonn.addEventListener("click", ()=>{
    menu.style.width = "20%"
    buttonn.style.display = "none"

})
x.addEventListener("click", ()=>{
    menu.style.width = "0px"
    buttonn.style.display = "block";
})