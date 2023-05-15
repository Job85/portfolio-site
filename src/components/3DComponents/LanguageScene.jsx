import React, { Suspense } from "react";
import "../../bootstrap/scss/components/_textSphereScene.scss";
import { useThree } from "@react-three/fiber";
import TextSphere from "./TextSphere";

const LanguageScene = () => {
    const { size: { width: canvasWidth } } = useThree();
    const sphereDistance = canvasWidth < 480 ? 10.5 : 20;

    return (
        <Suspense fallback={null}>
            <TextSphere position={[0, 0, `${sphereDistance}`]} text="HTML5" />
            <TextSphere position={[0, 0, 0]} text="CSS3" />
            <TextSphere position={[0, 0, `-${sphereDistance}`]} text="JavaScript" />
        </Suspense>
    )
}

export default LanguageScene;
