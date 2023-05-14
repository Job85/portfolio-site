import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";

const JJLogo = () => {
    const texture = useLoader(TextureLoader, "/Julian's_Logo.png", (loader) => {
        console.log(loader);
    }, (error) => {
        console.log(error);
    });


    const groupRef = useRef();
    const [rotation, setRotation] = useState(0);

    useFrame(() => {
        setRotation((rotation) => rotation + 0.01);
        groupRef.current.rotation.y = rotation
    })
    return (
        <group ref={groupRef}>
            <mesh>
                <sphereGeometry args={[10, 15, 15]} />
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh>
                <boxGeometry args={[30, 30, 30]} />
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                // side={DoubleSide}
                />
            </mesh>
        </group>
    )
}

export default JJLogo