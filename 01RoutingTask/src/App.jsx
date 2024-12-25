import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Client/Home";
import Dashboaard from "./pages/Admin/Dashboard";
import Contact from "./pages/Client/Contact";
import Products from "./pages/Client/Products";
import AdminProducts from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import ProductDetails from "./pages/Client/ProductDetails";
import NotFound from "./components/NotFound";
import ClientLayout from "./components/Client/ClientLayout";
import AdminLayout from "./components/Admin/AdminLayout";
import Header from "./layouts/Client/Header";
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
