import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './App.scss';
import './fonts/Benguiat\ Bold.ttf';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div className=''>
      <NavBar />
      <Hero />
      {/* <About /> */}
      {/* <Projects /> */}
    </div>
  );
}

export default App;
