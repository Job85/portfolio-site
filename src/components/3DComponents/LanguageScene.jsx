import React, { Suspense } from "react";
import "../../bootstrap/scss/components/_textSphereScene.scss";
import { useThree } from "@react-three/fiber";
import TextSphere from "./TextSphere";

const LanguageScene = () => {
    const { size: { width: canvasWidth } } = useThree();
    const sphereDistance = canvasWidth < 480 ? 10.5 : 20;

    return (
        <Suspense fallback={null}>
            <TextSphere
                position={[0, 0, `${sphereDistance}`]}
                text="HTML5"
                color1={"#12c3fb"}
                color2={"#be12fb"}
            />
            <TextSphere
                position={[0, 0, 0]}
                text="CSS3"
                color1={"#12c3fb"}
                color2={"#4ffb12"}
            />
            <TextSphere
                position={[0, 0, `-${sphereDistance}`]}
                text="JavaScript"
                color1={"#4ffb12"}
                color2={"#be12fb"}
            />
        </Suspense>
    )
}

export default LanguageScene;
