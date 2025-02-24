import "./App.css";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume.js";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import Testimonials from "./components/Testimonials/Testimonials";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Preloader />
          <Header />
          {/* <Particles /> */}
          <Hero />
          <About />
          <Resume />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}
