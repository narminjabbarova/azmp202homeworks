import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/edit/:id" element={<EditItem />} />
    </Routes>
  </Router>
);

export default App;
