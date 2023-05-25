import React, { Suspense, useRef, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import TextSphere from "./TextSphere";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";
import Banner from "./Banner";
import Platform from "./Platform";
// import * as THREE from "three";

const FrameworksScene = () => {
    const { size: { width: canvasWidth } } = useThree();
    const sphereDistance = canvasWidth < 480 ? 10.5 : 20;

    const light1 = useRef();
    const light2 = useRef();
    const light3 = useRef();
    const light4 = useRef();
    const light5 = useRef();
    const light6 = useRef();
    const light7 = useRef();
    const light8 = useRef();
    const target = useRef();

    // useHelper(light8, THREE.SpotLightHelper, "cyan");
    // useHelper(light6, THREE.SpotLightHelper, "cyan");
    // useHelper(light5, THREE.SpotLightHelper, "cyan");

    useEffect(() => {
        const updateLights = () => {
            light1.current.lookAt(light1.current.target.position);
            light2.current.lookAt(light2.current.target.position);
            light3.current.lookAt(light3.current.target.position);
            light4.current.lookAt(target.current.position);
            light5.current.lookAt(target.current.position);
            light6.current.lookAt(target.current.position);
            light7.current.lookAt(target.current.position);
            light8.current.lookAt(target.current.position);
        };

        updateLights();

        window.addEventListener("resize", updateLights);

        return () => {
            window.removeEventListener("resize", updateLights);
        };
    }, []);

    return (
        <Suspense fallback={null}>
            <Banner
                position={[-20, 10, -50]}
                rotation={[0, Math.PI / 2, 0]}
                color={"red"}
                bannerText={'Frameworks'}
            />
            <TextSphere
                position={[0, 0, sphereDistance]}
                sphereText="HTML5"
                colors={["#be12fb", "#12c3fb", "#4ffb12"]}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[0, 0, 0]}
                sphereText="CSS3"
                colors={["#be12fb", "#4ffb12", "#12c3fb"]}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[0, 0, -sphereDistance]}
                sphereText="JavaScript"
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
            <directionalLight
                ref={light4}
                intensity={0.9}
                penumbra={0.9}
                decay={50}
                position={[30, 11, -1.5]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={30}
                shadow-bias={-0.005}
                target={target.current}
            />
            <directionalLight
                ref={light5}
                intensity={1}
                penumbra={0.9}
                decay={50}
                position={[30, 10, -3.5]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={31}
                shadow-bias={-0.005}
                target={target.current}
            />
            <directionalLight
                ref={light6}
                intensity={0.3}
                penumbra={0.9}
                decay={50}
                position={[30, 11, -9]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={34}
                shadow-bias={-0.005}
                target={target.current}
            />
            <directionalLight
                ref={light7}
                intensity={0.3}
                penumbra={0.9}
                decay={50}
                position={[30, 11, -13]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={31}
                shadow-bias={-0.005}
                target={target.current}
            />
            <directionalLight
                ref={light8}
                intensity={0.3}
                penumbra={0.9}
                decay={50}
                position={[30, 11, -17]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={29}
                shadow-bias={-0.005}
                target={target.current}
            />
            <mesh // invisible target for light4
                ref={target}
                position={[0, 10, 0.5]}
            >
                <sphereGeometry args={[0.1, 1, 1]} />
                <meshBasicMaterial visible={false} />
            </mesh>
            {/* <Platform
                position={[0, -5, 0]}
                width={25}
                height={65}
                rotation={[-Math.PI / 2, 0, 0]}
                color={'grey'}
            />
            <Platform
                position={[-12.5, 7.5, 0]}
                width={65}
                height={25}
                rotation={[0, Math.PI / 2, 0]}
                color={'grey'}
            /> */}
        </Suspense>
    );
};

export default FrameworksScene;
