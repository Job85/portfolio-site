import React, { useMemo, useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber';
import TextTexture from './TextTexture';

const TextSphere = ({ text, position }) => {

    const [active, setActive] = useState(false);
    const { viewport } = useThree();

    const [sphereGeometryArgs, setSphereGeometryArgs] = useState([9, 31, 31]);

    useEffect(() => {
        if (viewport.width < 600) {
            setSphereGeometryArgs([5, 64, 32]);
        } else if (viewport.width < 1000) {
            setSphereGeometryArgs([9, 64, 32]);
        } else {
            setSphereGeometryArgs([9, 64, 32]);
        }
    }, [viewport]);

    const textHtml = useMemo(
        () =>
            `<div>${text}</div>`,
        [text]
    );

    const textTexture = TextTexture({
        text: textHtml,
    });

    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.y += 0.009;
    });

    return (
        <mesh
            position={position}
            ref={meshRef}
        // scale={(viewport.width / 5) * (active ? 1.5 : 1)}
        // onClick={(e) => setActive(!active)}
        >
            <sphereGeometry args={sphereGeometryArgs} color="red" />
            <meshStandardMaterial attach="material" map={textTexture} />
        </mesh>
    );
};

export default TextSphere;