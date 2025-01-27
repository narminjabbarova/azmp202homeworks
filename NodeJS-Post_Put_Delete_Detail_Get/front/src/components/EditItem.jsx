import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditItem = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}`)
      .then((response) => {
        const item = response.data;
        setTitle(item.title);
        setPrice(item.price);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/items/${id}`, { title, price })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Item</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditItem;
