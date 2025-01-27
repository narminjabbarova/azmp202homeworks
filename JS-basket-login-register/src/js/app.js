import { carsData } from './carsData.js';

const carList = document.getElementById('car-list');
const basketCount = document.getElementById('basketCount');
let basket = JSON.parse(localStorage.getItem('basket')) || [];


function updateBasketCount() {
  basketCount.textContent = `(${basket.length})`;
}


updateBasketCount();


carsData.forEach((car) => {
  const card = document.createElement('div');
  card.className = 'car-card';
  card.innerHTML = `
    <h3>${car.name}</h3>
    <p>Type: ${car.type}</p>
    <p>Fuel: ${car.fuel}</p>
    <p>Passengers: ${car.passengers}</p>
    <p>Price: $${car.price}</p>
    <button>Add to Basket</button>
  `;

  card.querySelector('button').addEventListener('click', () => {
    basket.push(car);
    localStorage.setItem('basket', JSON.stringify(basket));
    alert(`${car.name} added to basket!`);
    updateBasketCount();
  });

  carList.appendChild(card);
});
