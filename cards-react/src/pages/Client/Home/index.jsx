import React from 'react'
import { endpoints } from '../../../Data/constants';
import "../Home/index.css"
import { useState, useEffect } from 'react';
import getAllData from "../../../Data/index.js"

const Home = () => {

  const [products, setProducts] = useState([]);

const getProducts = async () => {
 
  try {
    const data = await getAllData(endpoints.products);

    setProducts(data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  getProducts();

}, []);

  return (
    <>
    <div className="App">
      {products.length> 0 && products.map((p)=>{
        return(
            <div className="card" key={p.id}>
            <img src={p.image} alt="" width={100}/>
            <h1 >{p.title}</h1>
            <p>{p.price}</p>


          </div>
        )
      })}

      {/* Header Section */}
      <header className="hero-section">
        <div className="container">
          <h1 className="hero-title">Welcome to Our Homepage</h1>
          <p className="hero-subtitle">Your gateway to a better experience</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>
     

      {/* Main Content Section */}
      <section className="main-content">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-description">
            We provide the best services to help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="main-content">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            Our mission is to provide high-quality products that solve real
            problems and create a positive impact.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home