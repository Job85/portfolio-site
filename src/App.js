import React from 'react';
import './App.scss';
import './fonts/Benguiat Bold.ttf';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LanguageCanvas from './components/3DComponents/LanguageCanvas'

function App() {
  return (
    <div className=''>
      <NavBar />
      <Hero />
      <LanguageCanvas />
    </div>
  );
}

export default App;
