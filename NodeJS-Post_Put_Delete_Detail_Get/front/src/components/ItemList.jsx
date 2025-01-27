import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <h1>Item List</h1>
      <Link to="/add">Add New Item</Link>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <Link to={`/edit/${item.id}`}>Edit</Link>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
