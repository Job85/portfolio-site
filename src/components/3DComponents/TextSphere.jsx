import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import TextTexture from './TextTexture';

const TextSphere = ({ text, position, color1, color2 }) => {
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

    const textHtml = useMemo(() => `<div>${text}</div>`, [text]);

    const textTexture = TextTexture({
        text: textHtml,
    });

    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uColor1: { value: new THREE.Color(color1) },
            uColor2: { value: new THREE.Color(color2) },
            uAlpha: { value: 0.6 },
            uTime: { value: 0.0 },
            uTexture: { value: textTexture },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;

          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform float uAlpha;
        uniform float uTime;
        uniform sampler2D uTexture;

        varying vec2 vUv;
        varying vec3 vPosition;

            void main() {
                vec3 textColor = vec3(1.0, 1.0, 1.0);
                vec3 interpolatedColor = mix(uColor1, uColor2, vUv.y);
                gl_FragColor = vec4(interpolatedColor * textColor, uAlpha);
            }
        `,
    });

    const textMaterial = new THREE.MeshBasicMaterial({
        map: textTexture,
        transparent: true,
        opacity: 1,
    });

    const groupRef = useRef();

    useFrame(() => {
        groupRef.current.rotation.y += 0.009;
    });

    return (
        <group position={position} ref={groupRef}>
            <mesh material={shaderMaterial}>
                <sphereGeometry args={sphereGeometryArgs} />
            </mesh>
            <mesh material={textMaterial}>
                <sphereGeometry args={sphereGeometryArgs} />
            </mesh>
        </group>
    );
};

export default TextSphere;
