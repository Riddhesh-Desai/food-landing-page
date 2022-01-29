import React from 'react';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Explore from "./components/Explore";
import Review from "./components/Review";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import './index.css';
 

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Explore/>
      <Review/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
