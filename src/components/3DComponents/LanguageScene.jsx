import React, { Suspense } from "react";
import "../../bootstrap/scss/components/_textSphereScene.scss";
import { useThree } from "@react-three/fiber";
import TextSphere from "./TextSphere";
import LanguageBanner from "./LanguageBanner";

const LanguageScene = () => {
    const { size: { width: canvasWidth } } = useThree();
    const sphereDistance = canvasWidth < 480 ? 10.5 : 20;

    return (
        <Suspense fallback={null}>
            <LanguageBanner
                position={[0, 7, 10]}
                rotation={[0, Math.PI / 2, 0]}
            />
            <TextSphere
                position={[0, 0, `${sphereDistance}`]}
                text="HTML5"
                colors={['#12c3fb', '#be12fb', '#4ffb12']}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[0, 0, 0]}
                text="CSS3"
                colors={['#be12fb', '#4ffb12', '#12c3fb']}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[0, 0, `-${sphereDistance}`]}
                text="JavaScript"
                colors={['#4ffb12', '#12c3fb', '#be12fb']}
                stops={[0.2, 0.5, 1.0]}
            />
        </Suspense>
    )
}

export default LanguageScene;
