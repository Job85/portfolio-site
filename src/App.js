import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Header from './components/Header';

function App() {
  return (
    <div class='container pt-5 border'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
