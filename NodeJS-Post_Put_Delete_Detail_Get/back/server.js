const express = require("express");
const cors = require("cors");
const fakeData = require("../back/fakeData");

const app = express();
app.use(cors());
app.use(express.json());

let items = [...fakeData];


app.get("/items", (req, res) => res.json(items));


app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});



app.post("/items", (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});


app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});


app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((item) => item.id !== id);
  res.json({ message: "Item deleted" });
});

app.listen(5000, () =>
  console.log("Url is http://localhost:5000")
);
