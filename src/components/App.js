import './App.css';
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
