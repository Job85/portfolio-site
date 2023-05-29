import React from 'react';
import { Canvas } from '@react-three/fiber';
import './App.scss';
import './fonts/Benguiat Bold.ttf';
import { OrbitControls } from '@react-three/drei';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import IntroPlane from './components/IntroPlane';

function App() {
  return (
    <div className='scene3'>
      <Canvas>
        <IntroPlane />
        <OrbitControls />
        {/* <ambientLight args={[0xff0000]} intensity={0.1} /> */}
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
      {/* <NavBar /> */}
      {/* <Hero /> */}
    </div>
  );
}

export default App;
