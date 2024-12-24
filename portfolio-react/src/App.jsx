import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.module.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

