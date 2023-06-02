import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Cloud = (props) => {
    const cloudTexture = useTexture({
        map: "/textures/Snow_AO.png",
        displacementMap: "/textures/Snow_Disp.png",
        colorMap: "/textures/Snow_Color.png",
        roughMap: "/textures/Snow_Rough.png"
    })

    const sphereRef = useRef();
    const sphereRef2 = useRef();
    const sphereRef3 = useRef();
    const sphereRef4 = useRef();
    const sphereRef5 = useRef();
    const sphereRef6 = useRef();
    const sphereRef7 = useRef();
    const sphereRef8 = useRef();
    const sphereRef9 = useRef();
    const sphereRef10 = useRef();
    const sphereRef11 = useRef();

    useFrame(() => {
        sphereRef.current.rotation.y += 0.0019;
        sphereRef.current.rotation.x += 0.0029;
        sphereRef.current.rotation.z += 0.0009;
        sphereRef2.current.rotation.y += 0.0009;
        sphereRef2.current.rotation.x += 0.0009;
        sphereRef2.current.rotation.z += 0.0019;
        sphereRef3.current.rotation.y += 0.0009;
        sphereRef3.current.rotation.x += 0.0009;
        sphereRef3.current.rotation.z += 0.0009;
        sphereRef4.current.rotation.y += 0.0009;
        sphereRef4.current.rotation.x += 0.0019;
        sphereRef4.current.rotation.z += 0.0029;
        sphereRef5.current.rotation.y += 0.0009;
        sphereRef5.current.rotation.x += 0.0009;
        sphereRef5.current.rotation.z += 0.0009;
        sphereRef6.current.rotation.y += 0.0019;
        sphereRef6.current.rotation.x += 0.0009;
        sphereRef6.current.rotation.z += 0.0009;
        sphereRef7.current.rotation.y += 0.0009;
        sphereRef7.current.rotation.x += 0.0009;
        sphereRef7.current.rotation.z += 0.0019;
        sphereRef8.current.rotation.y += 0.0029;
        sphereRef8.current.rotation.x += 0.0009;
        sphereRef8.current.rotation.z += 0.0009;
        sphereRef9.current.rotation.y += 0.0009;
        sphereRef9.current.rotation.x += 0.0019;
        sphereRef9.current.rotation.z += 0.0009;
        sphereRef10.current.rotation.y += 0.0005;
        sphereRef10.current.rotation.x += 0.0005;
        sphereRef10.current.rotation.z += 0.0005;
        sphereRef11.current.rotation.y += 0.0005;
        sphereRef11.current.rotation.x += 0.0005;
        sphereRef11.current.rotation.z += 0.0005;
    });

    return (
        <group
            position={props.groupPosition}
        >
            <mesh
                ref={sphereRef}
                position={[0, 0, 0]}
            >
                <sphereGeometry
                    args={[20, 64, 32]}
                />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.85}
                    depthTest
                    depthWrite
                    visible
                    color={0xffffff}
                    roughness={1}
                    metalness={0}
                    reflectivity={1}
                    clearcoat={0}
                    clearcoatRoughness={0}
                    flatShading
                    {...cloudTexture}
                />
            </mesh>
            <mesh
                ref={sphereRef2}
                position={[10, 0, 0]}
            >
                <sphereGeometry
                    args={[20, 64, 32]}
                />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.85}
                    depthTest
                    depthWrite
                    visible
                    color={0xffffff}
                    roughness={1}
                    metalness={0}
                    reflectivity={1}
                    clearcoat={0}
                    clearcoatRoughness={0}
                    flatShading
                    {...cloudTexture}
                />
            </mesh>
            <mesh
                ref={sphereRef3}
                position={[-10, 0, 0]}
            >
                <sphereGeometry
                    args={[20, 64, 32]}
                />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.85}
                    depthTest
                    depthWrite
                    visible
                    color={0xffffff}
                    roughness={1}
                    metalness={0}
                    reflectivity={1}
                    clearcoat={0}
                    clearcoatRoughness={0}
                    flatShading
                    {...cloudTexture}
                />
            </mesh>
            <mesh
                ref={sphereRef4}
                position={[20, 0, 0]}
            >
                <sphereGeometry
                    args={[20, 64, 32]}
                />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.85}
                    depthTest
                    depthWrite
                    visible
                    color={0xffffff}
                    roughness={1}
                    metalness={0}
                    reflectivity={1}
                    clearcoat={0}
                    clearcoatRoughness={0}
                    flatShading
                    {...cloudTexture}
                />
                <mesh
                    ref={sphereRef11}
                    position={[0, 0, 0]}
                >
                    <sphereGeometry
                        args={[18, 64, 32]}
                    />
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.85}
                        depthTest
                        depthWrite
                        visible
                        color={0xffffff}
                        roughness={1}
                        metalness={0}
                        reflectivity={1}
                        clearcoat={0}
                        clearcoatRoughness={0}
                        flatShading
                        {...cloudTexture}
                    />
                </mesh>
            </mesh>
            <mesh
                ref={sphereRef5}
                position={[-20, 0, 0]}
            >
                <sphereGeometry
                    args={[20, 64, 32]}
                />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.85}
                    depthTest
                    depthWrite
                    visible
                    color={0xffffff}
                    roughness={1}
                    metalness={0}
                    reflectivity={1}
                    clearcoat={0}
                    clearcoatRoughness={0}
                    flatShading
                    {...cloudTexture}
                />
                <mesh
                    ref={sphereRef10}
                    position={[0, 0, 0]}
                >
                    <sphereGeometry
                        args={[18, 64, 32]}
                    />
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.85}
                        depthTest
                        depthWrite
                        visible
                        color={0xffffff}
                        roughness={1}
                        metalness={0}
                        reflectivity={1}
                        clearcoat={0}
                        clearcoatRoughness={0}
                        flatShading
                        {...cloudTexture}
                    />
                </mesh>
            </mesh>
            <group>
                <mesh
                    ref={sphereRef6}
                    position={[0, 10, 0]}
                >
                    <sphereGeometry
                        args={[20, 64, 32]}
                    />
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.85}
                        depthTest
                        depthWrite
                        visible
                        color={0xffffff}
                        roughness={1}
                        metalness={0}
                        reflectivity={1}
                        clearcoat={0}
                        clearcoatRoughness={0}
                        flatShading
                        {...cloudTexture}
                    />
                </mesh>
                <mesh
                    ref={sphereRef7}
                    position={[-5, 10, 0]}
                >
                    <sphereGeometry
                        args={[20, 64, 32]}
                    />
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.85}
                        depthTest
                        depthWrite
                        visible
                        color={0xffffff}
                        roughness={1}
                        metalness={0}
                        reflectivity={1}
                        clearcoat={0}
                        clearcoatRoughness={0}
                        flatShading
                        {...cloudTexture}
                    />
                </mesh>
                <mesh
                    ref={sphereRef8}
                    position={[5, 10, 0]}
                >
                    <sphereGeometry
                        args={[20, 64, 32]}
                    />
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.85}
                        depthTest
                        depthWrite
                        visible
                        color={0xffffff}
                        roughness={1}
                        metalness={0}
                        reflectivity={1}
                        clearcoat={0}
                        clearcoatRoughness={0}
                        flatShading
                        {...cloudTexture}
                    />
                </mesh>
            </group>
            <group>
                <mesh
                    ref={sphereRef9}
                    position={[0, 13, 0]}
                >
                    <sphereGeometry
                        args={[20, 64, 32]}
                    />
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.85}
                        depthTest
                        depthWrite
                        visible
                        color={0xffffff}
                        roughness={1}
                        metalness={0}
                        reflectivity={1}
                        clearcoat={0}
                        clearcoatRoughness={0}
                        flatShading
                        {...cloudTexture}
                    />
                </mesh>
            </group>
        </group>
    )
}

export default Cloud