import React from 'react';
import { Canvas } from '@react-three/fiber';
import './App.scss';
import './fonts/Benguiat Bold.ttf';
import { OrbitControls, PerspectiveCamera, ScrollControls, Stars } from '@react-three/drei';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
// import IntroPlane from './components/IntroPlane';
import Cloud from './components/3DComponents/Cloud';
import Experience from './components/3DComponents/Experience';
import Experience2 from './components/3DComponents/Experience2';

function App() {
  return (
    <div className='scene3'>
      <Canvas>
        <ScrollControls
          pages={5}
          damping={0.3}
        >
          <Experience2 />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
