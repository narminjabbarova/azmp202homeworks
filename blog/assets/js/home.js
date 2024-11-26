// import { BASE_URL } from "./constants.js";

// const container = document.querySelector(".container");

// function drawCards(arr) {
//   container.innerHTML = "";
//   arr.forEach((item) => {
//     container.innerHTML += `
//       <div class="card" style="width: 18rem; height: 15rem;">
//         <div class="card-body my-4">
//           <h5 class="card-title">${item.title}</h5>
//           <h6 class="card-title">${item.body}</h6>
//           <p class="card-text">written by ${item.author}</p>
//           <div class="all-btns d-flex gap-3">
//           <a href="#" class="btn btn-danger">Delete</a>
//             <a href="#" class="btn btn-primary w-5">Edit</a>
//           </div>
//         </div>
//       </div>
//     `;
//   });

// }


// getData("blogs")


import { BASE_URL } from "./constants.js";

const container = document.querySelector(".container");

function drawCards(arr) {
  container.innerHTML = "";
  arr.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem; height: 15rem;";
    card.innerHTML = `
      <div class="card-body my-4">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-title">${item.body}</h6>
        <p class="card-text">written by ${item.author}</p>
        <div class="all-btns d-flex gap-3">
          <button class="btn btn-danger delete-btn">Delete</button>
          <a href="edit.html" class="btn btn-warning edit-btn w-5 text-white ">Edit</a>
        </div>
      </div>
    `;
    container.appendChild(card);

    
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      deleteCard(item.id, card); 
    });
  });
}

function deleteCard(id, cardElement) {
  axios.delete(`${BASE_URL}blogs/${id}`) 
    .then(() => {
      cardElement.remove(); 
      console.log(`Card with ID ${id} deleted successfully`);
    })
    .catch((err) => {
      console.error(err);
    });
}

function getData(endpoint) {
  axios.get(`${BASE_URL}${endpoint}`)
    .then((response) => {
      drawCards(response.data); 
    })
    .catch((err) => {
      console.log(err);
    });
}

getData("blogs");