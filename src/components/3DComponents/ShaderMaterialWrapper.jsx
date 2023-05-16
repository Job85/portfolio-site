import React, { useMemo } from 'react';
import { ShaderMaterial } from 'three';

const ShaderMaterialWrapper = ({ colorA, colorB }) => {
    const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    varying vec2 vUv;
    uniform vec3 colorA;
    uniform vec3 colorB;
    void main() {
      gl_FragColor = vec4(mix(colorA, colorB, vUv.y), 1.0);
    }
  `;

    const material = useMemo(
        () =>
            new ShaderMaterial({
                uniforms: {
                    colorA: { value: colorA },
                    colorB: { value: colorB },
                },
                vertexShader,
                fragmentShader,
            }),
        [colorA, colorB]
    );

    return <primitive object={material} />;
};

export default ShaderMaterialWrapper;