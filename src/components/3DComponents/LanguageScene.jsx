import React, { Suspense, useRef, useEffect, useState, forwardRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import TextSphere from "./TextSphere";
import { OrbitControls, useHelper, PerspectiveCamera, Plane } from "@react-three/drei";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import * as THREE from "three";
import { RectAreaLight } from "three";
import Banner from "./Banner";
import Platform from "./Platform";
// import * as THREE from "three";

const LanguageScene = () => {
    const { size: { width: canvasWidth } } = useThree();
    const sphereDistance = canvasWidth < 480 ? 10.5 : 20;

    const angle = Math.PI / 2.75;

    const light1 = useRef();
    const light2 = useRef();
    const light3 = useRef();
    const light4 = useRef();
    const light5 = useRef();
    const light6 = useRef();
    const light7 = useRef();
    const light8 = useRef();
    const target = useRef();

    const rectAreaLightRef = useRef(new RectAreaLight());
    useHelper(rectAreaLightRef, RectAreaLightHelper, 'blue')

    // const { intensity, width, height, color } = useControls({ intensity: { value: 1, min: 0, max: 20 }, width: { value: 3, min: 1, max: 10 }, height: { value: 3, min: 1, max: 10 }, color: '#fff' });
    // const { intensity, width, height, color } = useControls({ intensity: { value: 1, min: 0, max: 20 }, width: { value: 3, min: 1, max: 10 }, height: { value: 3, min: 1, max: 10 }, color: '#fff' });
    useHelper(light1, THREE.SpotLightHelper, "cyan");
    useHelper(light5, THREE.SpotLightHelper, "cyan");
    useHelper(light6, THREE.SpotLightHelper, "cyan");
    // useHelper(light7, THREE.SpotLightHelper, "cyan");
    // useHelper(light8, THREE.SpotLightHelper, "cyan");

    useEffect(() => {
        const updateLights = () => {
            light1.current.lookAt(light1.current.target.position);
            light2.current.lookAt(light2.current.target.position);
            light3.current.lookAt(light3.current.target.position);
            // light4.current.lookAt(target.current.position);
            // light5.current.lookAt(target.current.position);
            // light6.current.lookAt(target.current.position);
            // light7.current.lookAt(target.current.position);
            // light8.current.lookAt(target.current.position);
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
                position={[-40, 8, 53]}
                rotation={[0, (angle), 0]}
                color={0x49ef4}
                bannerText={'Languages'}
            />
            <TextSphere
                position={[-35, 0, 55]}
                sphereText="HTML5"
                colors={["#be12fb", "#12c3fb", "#4ffb12"]}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[-22, 0, 52]}
                sphereText="CSS3"
                colors={["#be12fb", "#4ffb12", "#12c3fb"]}
                stops={[0.2, 0.5, 1.0]}
            />
            <TextSphere
                position={[-11, 0, 49]}
                sphereText="JavaScript"
                colors={["#4ffb12", "#12c3fb", "#be12fb"]}
                stops={[0.2, 0.5, 1.0]}
            />

            <spotLight //center of light points at HTML sphere
                ref={light1}
                intensity={1}
                penumbra={0.2}
                decay={0.001}
                position={[-15, 0, 65]}
                angle={0.9}
                color={"white"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={30}
                shadow-bias={-0.005}
                target={light1.current?.parent?.children[3]}
            />

            <spotLight // center of light points at CSS sphere
                ref={light2}
                intensity={1}
                penumbra={0.8}
                decay={0.001}
                position={[-15, 0, 75]}
                angle={0.9}
                color={"white"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={30}
                shadow-bias={-0.005}
                target={light2.current?.parent?.children[4]}
            />

            <spotLight // center of light points at JS sphere
                ref={light3}
                intensity={1}
                penumbra={0.7}
                decay={0.001}
                position={[-15, 0, 75]}
                angle={0.9}
                color={"white"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={30}
                shadow-bias={-0.005}
                target={light3.current?.parent?.children[5]}
            />
            <rectAreaLight
                ref={rectAreaLightRef}
                intensity={20}
                width={9}
                height={30}
                color={'white'}
                position={[-30, 8, 41]}
                rotation-x={Math.PI / 2.2}
                rotation-y={Math.PI / 6}
                rotation-z={Math.PI / 0.49}
            />
            {/* <spotLight
                ref={light4}
                intensity={1}
                penumbra={0.1}
                decay={0.5}
                position={[-15, 8, 80]}
                angle={0.04}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={500}
                shadow-bias={-0.005}
                target={target.current}
            /> */}
            {/* <spotLight
                ref={light5}
                intensity={1}
                penumbra={0.9}
                decay={50}
                position={[-20, 8, 80]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={31}
                shadow-bias={-0.005}
                target={target.current}
            /> */}
            {/* <spotLight
                ref={light6}
                intensity={0.3}
                penumbra={0.9}
                decay={50}
                position={[-10, 8, 80]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={34}
                shadow-bias={-0.005}
                target={target.current}
            /> */}
            {/* <spotLight
                ref={light7}
                intensity={0.3}
                penumbra={0.9}
                decay={50}
                position={[-20, 8, 60]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={31}
                shadow-bias={-0.005}
                target={target.current}
            /> */}
            {/* <spotLight
                ref={light8}
                intensity={1}
                penumbra={0.9}
                decay={0.001}
                position={[-20, 10, 60]}
                angle={0.09}
                color={"red"}
                shadow-mapSize-width={64}
                shadow-mapSize-height={64}
                castShadow
                distance={500}
                shadow-bias={-0.005}
                target={target.current}
            /> */}
            <mesh // invisible target for light4
                ref={target}
                position={[-35, 9, 45]}
            >
                <sphereGeometry args={[3, 64, 32]} />
                <meshBasicMaterial visible={false} />
            </mesh>
            <OrbitControls />
        </Suspense>
    );
};

export default LanguageScene;
