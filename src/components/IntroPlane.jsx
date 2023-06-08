import React from "react";
import { Text } from "@react-three/drei";

const IntroPlane = () => {

    return (
        <mesh>
            <planeGeometry
                args={[10, 8, 30, 30]}
            />
            <meshStandardMaterial
                color={0x0080FF}
                roughness={0.3}
                metalness={0.9}
            />
            <Text
                curveRadius={-10}
                position={[0, 0, 1]}
                color={0xFF00FF}
            >
                Resolving Complex{"\n"}
                Problems{"\n"}
                Through Innovative{"\n"}
                and Efficient Design
            </Text>
        </mesh>
    )
}

export default IntroPlane