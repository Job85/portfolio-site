import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import JJLogo from "./Header/3DLogo";
import "../bootstrap/scss/components/_canvas.scss";

const LogoCanvas = () => {

    return (
        <div className="scene2">
            <Canvas
                shadows
                className="canvas"
                camera={{
                    position: [-50, 0, 5]
                }}
            >
                <hemisphereLight args={["#fff", '#333', 1]} />
                <Suspense fallback={null}>
                    <JJLogo />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default LogoCanvas