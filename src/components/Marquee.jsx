import React from "react";
import { Text, Billboard } from "@react-three/drei";

const Marquee = (props) => {
    console.log(props)
    return (
        <Billboard
            position={props.position}
            rotation={props.rotation}
            follow={true}
        >
            <mesh>
                <planeGeometry
                    args={[10, 8, 30, 30]}
                />
                <meshStandardMaterial
                    color={0x0080FF}
                    roughness={0.3}
                    metalness={0.9}
                />
            </mesh>
            <Text
                curveRadius={-10}
                position={[0, 0, 1]}
                color={0xFF00FF}
            >
                {props.text}
            </Text>
        </Billboard>
    )
}

export default Marquee