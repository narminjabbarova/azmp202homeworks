import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/items", { title, price }).then(() => {
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Item</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
