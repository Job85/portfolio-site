import React from 'react';
import './App.scss';
import './fonts/Benguiat Bold.ttf';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LogoCanvas from './components/LogoCanvas';

function App() {
  return (
    <div className=''>
      <NavBar />
      <Hero />
      <LogoCanvas />
    </div>
  );
}

export default App;
