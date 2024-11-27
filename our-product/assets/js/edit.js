import { BASE_URL } from "./constants.js";

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
  const x = document.querySelector("span")
  const nameInput = document.querySelector(".name");
  const priceInput = document.querySelector(".price");
  const descriptionInput = document.querySelector(".desc");
  const btnSubmit = document.querySelector(".btn-submit");
  const btnEdit = document.querySelector(".edit");
  const stockInput = document.querySelector(".stock");

  btnEdit.addEventListener("click", function () {
    modal.style.display = "flex"
  })
  
  x.addEventListener("click", function () {
    modal.style.display = "none"
  })





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