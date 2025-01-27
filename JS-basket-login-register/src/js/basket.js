const basketTable = document.querySelector('#basket-table tbody');
const basket = JSON.parse(localStorage.getItem('basket')) || [];


function renderBasket() {
  basketTable.innerHTML = ''; 

  if (basket.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `<td colspan="5" style="text-align:center;">Your basket is empty!</td>`;
    basketTable.appendChild(emptyRow);
    return;
  }

  basket.forEach((car) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${car.name}</td>
      <td>${car.type}</td>
      <td>${car.fuel}</td>
      <td>${car.passengers}</td>
      <td>$${car.price}</td>
    `;
    basketTable.appendChild(row);
  });
}

renderBasket();
