import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './fonts/Benguiat\ Bold.ttf';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div className='container pt-5 border'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
