import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Controls from "../Controls/OrbitControls";
import { OrbitControls } from "@react-three/drei";
import Draggable from "../Controls/DragControls";
import * as THREE from "three";
import "../../bootstrap/scss/components/_textSphereScene.scss";
import { Sky, useHelper } from "@react-three/drei";
import LanguageScene from "./LanguageScene";

const LanguageCanvas = ({ text }) => {

    function Lights() {
        const light = useRef();
        useHelper(light, THREE.SpotLightHelper, 'cyan')
        return <spotLight
            ref={light}
            intensity={0.9}
            penumbra={0.9}
            decay={10}
            position={[20, -10, 0]}
            angle={0.3}
            color={'cyan'}
            shadow-mapSize-width={64}
            shadow-mapSize-height={64}
            castShadow
            distance={50}
            shadow-bias={-0.005}
        />
    }

    return (
        <div className="scene">
            <Canvas
                style={{ background: 'black' }}
                camera={{ fov: 75, position: [30, 0, 0] }}
            >
                {/* <hemisphereLight args={["#fff", '#333', 1]} /> */}
                {/* <Sky sunPosition={[100, 10, 100]} /> */}
                {/* <directionalLight intensity={0.5} position={[10, 10, 10]} /> */}
                <ambientLight
                    intensity={0.1}
                    color={0xEEEDC9}
                />
                {/* <Lights /> */}
                <spotLight
                    intensity={0.9}
                    penumbra={0.9}
                    decay={10}
                    position={[20, -10, 0]}
                    angle={0.3}
                    color={'cyan'}
                    shadow-mapSize-width={64}
                    shadow-mapSize-height={64}
                    castShadow={true}
                    distance={50}
                    shadow-bias={-0.005}
                />
                <LanguageScene />
                <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} />
                {/* <Draggable /> */}
            </Canvas>
        </div>
    )
}

export default LanguageCanvas;
