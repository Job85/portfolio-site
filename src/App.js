import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='container pt-5 border'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
