import { BASE_URL } from "./constants.js";
const cardPlace = document.querySelector(".card-place")
const searchInput = document.querySelector(".search")


function drawCards(arr) {
  cardPlace.innerHTML = "";
  arr.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem; height: 22rem;";
    card.innerHTML = `
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body my-4">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    <p class="price"> ${item.price}</p>
    </div>
    
    `;
    cardPlace.appendChild(card);
    
  });
}
let array = null

function getData(endpoint) {
  axios.get(`${BASE_URL}${endpoint}`)
    .then((response) => {
      array = response.data
      drawCards(response.data); 
    })
    .catch((err) => {
      console.log(err);
    });
}
getData("products")

searchInput.addEventListener("keyup", ()=>{
  const filtered = array.filter((item)=>
  item.name?.toLowerCase().includes(searchInput.value.toLowerCase())||
  item.description?.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  drawCards(filtered)
})