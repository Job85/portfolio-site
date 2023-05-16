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
            <Canvas
                style={{ background: 'black' }}
                camera={{ fov: 75, position: [30, 0, 0] }}
            >
                <hemisphereLight args={["#fff", '#333', 1]} />
                <Sky sunPosition={[100, 10, 100]} />
                {/* <directionalLight intensity={0.5} position={[10, 10, 10]} /> */}
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <LanguageScene />
                {/* <Controls /> */}
                {/* <Draggable /> */}
            </Canvas>
        </div>
    )
}

export default LanguageCanvas;
