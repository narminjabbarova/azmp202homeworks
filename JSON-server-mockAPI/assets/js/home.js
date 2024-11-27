import { BASE_URL } from "./constants.js";

const tBody = document.querySelector("tbody")
const spinner = document.querySelector(".spinner")

function getData(endpoint) {
    fetch(`${BASE_URL}${endpoint}`)
    .then((Response) => Response.json())
    .then((data)=>{
        // console.log(data);
        drawTable(data);
        
    })
}
getData("customers")

function getDataById(endpoint, id) {
    fetch(`${BASE_URL}${endpoint}/${id}`)
    .then((Response) => Response.json())
    .then((data)=>{
        // console.log(data);  
    })
}
getDataById("customers", "AROUT")

function drawTable(arr) {
    tBody.innerHTML = ""
    arr.forEach((item) => {
        tBody.innerHTML += `
        <tr>
           <td>${item.id}</td>
           <td>${item.companyName}</td>
           <td>${item.contactTitle}</td>
           <td>${item.address?.phone}</td>
           <td>${item.address?.street}</td>
           <td>${item.address?.city}, ${item.address?.country}</td>
           <td>
           <button class="delete btn btn-outline-danger" data-id=${item.id}>delete</button>
                <button class="edit btn btn-outline-success">edit</button>
                <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${item.id}">details</a>
           </td>
       </tr>
        `
    });
    const allDeleteBtns = document.querySelectorAll(".delete")
    allDeleteBtns.forEach((btn)=>{
        btn.addEventListener("click", function(){
            const id = this.getAttribute("data-id")
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    deleteData("customers", id, this)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
        })
    })
}

function deleteData(endpoint, id, btn){
    fetch(`${BASE_URL}${endpoint}/${id}`, {method: "delete"})
    .then((res)=>{
        if(res.ok){
            btn.closest("tr").remove();
            // getData("customers");
        }
        // console.log(res);

    })
    .catch((err)=>{
        console.log(err);
        
    })
}
window.addEventListener("DOMContentLoaded", function(){
    getData("customers");
})


