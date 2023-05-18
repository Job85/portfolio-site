import React, { Suspense, useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import TextSphere from "./TextSphere";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";
import LanguageBanner from "./LanguageBanner";
import Platform from "./Platform";
// import * as THREE from "three";

const LanguageScene = () => {
    const { size: { width: canvasWidth } } = useThree();
    const sphereDistance = canvasWidth < 480 ? 10.5 : 20;

    const light1 = useRef();
    const light2 = useRef();
    const light3 = useRef();

    // useHelper(light1, THREE.SpotLightHelper, "cyan");
    // useHelper(light2, THREE.SpotLightHelper, "cyan");
    // useHelper(light3, THREE.SpotLightHelper, "cyan");

    useEffect(() => {
        const updateLights = () => {
            light1.current.lookAt(light1.current.target.position);
            light2.current.lookAt(light2.current.target.position);
            light3.current.lookAt(light3.current.target.position);
        };

        updateLights();

        window.addEventListener("resize", updateLights);

        return () => {
            window.removeEventListener("resize", updateLights);
        };
    }, []);

    return (
        <Suspense fallback={null}>
            <LanguageBanner position={[0, 7, 10]} rotation={[0, Math.PI / 2, 0]} />
            <TextSphere
                position={[0, 0, sphereDistance]}
                text="HTML5"
                colors={["#be12fb", "#12c3fb", "#4ffb12"]}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[0, 0, 0]}
                text="CSS3"
                colors={["#be12fb", "#4ffb12", "#12c3fb"]}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[0, 0, -sphereDistance]}
                text="JavaScript"
                colors={["#4ffb12", "#12c3fb", "#be12fb"]}
                stops={[0.2, 0.5, 1.0]}
            />

            <spotLight
                ref={light1}
                intensity={1}
                penumbra={0.9}
                decay={10}
                position={[40, 0, 0]}
                angle={0.6}
                color={"white"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={500}
                shadow-bias={-0.005}
                target={light1.current?.parent?.children[1]}
            />

            <spotLight
                ref={light2}
                intensity={1}
                penumbra={0.9}
                decay={10}
                position={[40, 0, 0]}
                angle={0.6}
                color={"white"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={500}
                shadow-bias={-0.005}
                target={light2.current?.parent?.children[2]}
            />

            <spotLight
                ref={light3}
                intensity={1}
                penumbra={0.9}
                decay={10}
                position={[40, 0, 0]}
                angle={0.6}
                color={"white"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={500}
                shadow-bias={-0.005}
                target={light3.current?.parent?.children[3]}
            />
            <Platform
                position={[0, -5, 0]}
                width={25}
                height={65}
                rotation={[-Math.PI / 2, 0, 0]}
                color={'grey'}
            />
            <Platform
                position={[-12.5, 0, 0]}
                width={65}
                height={25}
                rotation={[0, Math.PI / 2, 0]}
                color={'grey'}
            />
        </Suspense>
    );
};

export default LanguageScene;
