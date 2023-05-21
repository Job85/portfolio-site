import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { GradientTexture } from '@react-three/drei';
import * as THREE from 'three';
import TextTexture from './TextTexture';

const TextSphere = ({ sphereText, position, colors, stops }) => {
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

    const textHtml = useMemo(() => `<div>${sphereText}</div>`, [sphereText]);

    const textTexture = TextTexture({
        text: textHtml,
    });

    const textMaterial = new THREE.MeshStandardMaterial({
        map: textTexture,
        transparent: true,
        opacity: 1,
        color: 'red'
    });

    const groupRef = useRef();

    useFrame(() => {
        groupRef.current.rotation.y += 0.009;
    });

    return (
        <group position={position} ref={groupRef}>
            <mesh>
                <sphereGeometry args={sphereGeometryArgs} />
                <meshStandardMaterial>
                    <GradientTexture
                        stops={stops}
                        colors={colors}
                    />
                </meshStandardMaterial>
            </mesh>
            <mesh material={textMaterial}>
                <sphereGeometry args={sphereGeometryArgs} />
            </mesh>
        </group>
    );
};

export default TextSphere;
