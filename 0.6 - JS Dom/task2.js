document.body.style.margin = "0";
document.body.style.padding = "0";


//container
const container = document.createElement("div");
container.style.textAlign = "center";
document.body.appendChild(container);

// large-box
const largeBox = document.createElement("div");
largeBox.style.width = "960px";
largeBox.style.height = "360px";
largeBox.style.backgroundColor = "gray";
largeBox.style.margin = "20px auto";
largeBox.style.position = "relative";
container.appendChild(largeBox);

//large-box-texts
const largeText = document.createElement("div");
largeText.innerText = "960 x 360px";
largeText.style.color = "white";
largeText.style.fontSize = "30px";
largeText.style.position = "absolute";
largeText.style.top = "50%";
largeText.style.left = "50%";
largeText.style.transform = "translate(-50%, -50%)";
largeBox.appendChild(largeText);

//smallboxes-container
const row = document.createElement("div");
row.style.display = "flex";
row.style.justifyContent = "center";
row.style.marginTop = "20px";
container.appendChild(row);

//smallboxes
for (let i = 0; i < 3; i++) {
  const smallBoxContainer = document.createElement("div");
  smallBoxContainer.style.width = "290px";
  smallBoxContainer.style.margin = "0 10px";

  const smallBox = document.createElement("div");
  smallBox.style.width = "100%";
  smallBox.style.height = "180px";
  smallBox.style.backgroundColor = "gray";
  smallBox.style.position = "relative";
  smallBoxContainer.appendChild(smallBox);

  //290text
  const smallText = document.createElement("div");
  smallText.innerText = "290 x 180px";
  smallText.style.color = "white";
  smallText.style.fontSize = "25px";
  smallText.style.position = "absolute";
  smallText.style.top = "50%";
  smallText.style.left = "50%";
  smallText.style.transform = "translate(-50%, -50%)";
  smallBox.appendChild(smallText);

  //belowbox-text
  const textContainer = document.createElement("div");
  textContainer.style.textAlign = "left";
  textContainer.style.fontSize = "15px";
  textContainer.style.color = "gray";
  textContainer.style.marginTop = "10px";

  const title = document.createElement("i");
  title.innerText = "Lorem, ipsum.";
  textContainer.appendChild(title);

  const description = document.createElement("p");
  description.innerText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
  description.style.margin = "10px 0";
  description.style.fontSize = "15px";
  description.style.color = "gray";
  textContainer.appendChild(description);

  const readMoreContainer = document.createElement("div");
  readMoreContainer.style.textAlign = "right"; 

  const readMore = document.createElement("a");
  readMore.innerText = "Read More »";
  readMore.href = "#";
  readMore.style.color = "orange";
  readMore.style.textDecoration = "none";
  readMoreContainer.appendChild(readMore);

  textContainer.appendChild(readMoreContainer);
  smallBoxContainer.appendChild(textContainer);
  row.appendChild(smallBoxContainer);
}