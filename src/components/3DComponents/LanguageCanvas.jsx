// TextSphereScene
import React from "react";
import { Canvas } from "@react-three/fiber";
import Controls from "../Controls/OrbitControls";
import Draggable from "../Controls/DragControls";
import "../../bootstrap/scss/components/_textSphereScene.scss";
import { Sky } from "@react-three/drei";
import LanguageScene from "./LanguageScene";

const LanguageCanvas = ({ text }) => {
    return (
        <div className="scene">
            <Canvas style={{ background: 'black' }} camera={{ fov: 75, position: [30, 0, 0] }}>
                <hemisphereLight args={["#fff", '#333', 1]} />
                <Sky sunPosition={[100, 10, 100]} />
                <directionalLight intensity={0.5} position={[10, 10, 10]} />
                <LanguageScene />
                <Controls />
                <Draggable />
            </Canvas>
        </div>
    )
}

export default LanguageCanvas;
