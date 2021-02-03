import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import Particles from './components/Particles/particles'

import React, { Component } from "react";

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <Preloader />
          <Header />
          <Hero />
          <Particles/>
          <About />
          <Resume />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}
