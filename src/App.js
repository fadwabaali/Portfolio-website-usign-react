import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './styles/app.css'
import Navbar from './component/Navbar'
import Home from "./component/Home";
import Companies from "./component/Companies";
import About from "./component/About";
import Services from "./component/Services";
import Features from "./component/Features";
import Banner from "./component/Banner";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main >
        <Home />
        <Companies />
        <About />
        <Services />
        <Features />
        <Banner />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
