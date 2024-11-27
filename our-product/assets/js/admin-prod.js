import { BASE_URL } from "./constants.js";

const tBody = document.querySelector("tbody")
function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((item) => {
    tBody.innerHTML += `
    <tr>
              <th>${item.id}</th>
              <th>${item.name}</th>
              <th>${item.price}</th>
              <th>${item.description}</th>
              <th>${item.stock}</th>
              <th>
              <a href="edit.html"><button class="edit btn btn-warning text-white"data-id=${item.id}>Edit</button></a>
              <button class="delete btn btn-danger" data-id=${item.id}>Delete</button>
              </th>
            </tr>
    `
    // tBody.appendChild(tr)
  })
}

function getData(endpoint) {
  axios.get(`${BASE_URL}${endpoint}`)
    .then((response) => {
      drawTable(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
getData("products")

function addProducts(endpoint) {
  axios.get(`${BASE_URL}${endpoint}`)
    .then((response) => {
      console.log(response.data);
      drawTable(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
addProducts("products")
const modal = document.querySelector(".modal")
const modalBox = document.querySelector(".modal-box")
const btnCreate = document.querySelector(".btn-create")
const x = document.querySelector("span")

btnCreate.addEventListener("click", function () {
  modal.style.display = "flex"
})

x.addEventListener("click", function () {
  modal.style.display = "none"
})



const btnSubmit = document.querySelector(".btn-submit");
const nameInput = document.querySelector(".name");
const priceInput = document.querySelector(".price");
const descriptionInput = document.querySelector(".desc");
const stockInput = document.querySelector(".stock");



function addToTable(endpoint) {
  btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    let newProduct = {
      name: nameInput.value.trim(),
      price: priceInput.value.trim(),
      description: descriptionInput.value.trim(),
      stock: stockInput.value.trim(),
    };

    
    axios.post(`${BASE_URL}${endpoint}`, newProduct)
      .then(() => {
        modal.style.display = "none";
        nameInput.value = "";
        priceInput.value = "";
        descriptionInput.value = "";
        stockInput.value = "";
        addProducts("products");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

addToTable("products");

tBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const productId = e.target.getAttribute("data-id");

    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct("products", productId);
    }
  }
});

function deleteProduct(endpoint, id) {
  axios
    .delete(`${BASE_URL}${endpoint}/${id}`)
    .then(() => {
      addProducts("products");
    })
    .catch((err) => {
      console.log(err);
    });
}