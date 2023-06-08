import React from 'react';
import { Canvas } from '@react-three/fiber';
import './App.scss';
import './fonts/Benguiat Bold.ttf';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import IntroPlane from './components/IntroPlane';
import Cloud from './components/3DComponents/Cloud';
import Experience from './components/3DComponents/Experience';

function App() {
  return (
    <div className='scene3'>
      <Canvas>
        {/* <color attach="background" args={["#ececec"]} /> */}
        <Experience />
        {/* <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        /> */}
        <IntroPlane />
        <perspectiveCamera
          default
          fov={100}
        />
        <Cloud groupPosition={[60, -30, -200]} />
        <Cloud groupPosition={[-60, -30, -140]} />
        <Cloud groupPosition={[80, -15, -175]} />
        <OrbitControls />
        {/* <ambientLight args={["white"]} intensity={0.1} /> */}
        {/* <directionalLight position={[0, 0, 5]} intensity={0.2} color={"white"} /> */}
        {/* <directionalLight position={[0, 20, -5]} intensity={0.5} /> */}
      </Canvas>
      {/* <NavBar /> */}
      {/* <Hero /> */}
    </div>
  );
}

export default App;
