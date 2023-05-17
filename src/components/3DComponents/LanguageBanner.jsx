import React, { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import lato from "../../fonts/Lato_Regular.json";

extend({ TextGeometry })

const LanguageBanner = ({ position, rotation }) => {

    const font = new FontLoader().parse(lato);

    return (
        <mesh
            position={position}
            rotation={rotation}
        >
            <textGeometry
                args={['Languages', { font, size: 3, height: 1.5, curveSegments: 8 }]} />
            <meshStandardMaterial
                attach='material'
                color={'#a6d0e7'}
                emissive={'#467892'}
                roughness={0}
                metalness={1}

            />
        </mesh>
    )
}

export default LanguageBanner;