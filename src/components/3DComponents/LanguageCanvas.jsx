import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Controls from "../Controls/OrbitControls";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Draggable from "../Controls/DragControls";
import * as THREE from "three";
import "../../bootstrap/scss/components/_textSphereScene.scss";
import { Sky } from "@react-three/drei";
import LanguageScene from "./LanguageScene";

const LanguageCanvas = ({ text }) => {


    return (
        <div className="scene">
            <Canvas
                style={{ background: 'black' }}
            // camera={{ fov: 75, position: [5, 0, 80], aspect: [16] }}
            >
                <PerspectiveCamera makeDefault fov={75} position={[0, 0, 80]} />
                <LanguageScene />
                {/* <hemisphereLight args={["#fff", '#333', 1]} /> */}
                {/* <Sky sunPosition={[100, 10, 100]} /> */}
                {/* <directionalLight intensity={0.5} position={[10, 10, 10]} /> */}
                <ambientLight
                    intensity={0.1}
                    color={0xEEEDC9}
                />
                <Draggable />
                <Controls />
            </Canvas>
        </div>
    )
}

export default LanguageCanvas;