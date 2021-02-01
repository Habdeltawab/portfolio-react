import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Preloader from './components/Preloader/Preloader'

function App() {
  return (
    <div className="App">
      <Preloader/>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
