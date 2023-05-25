import { useMemo } from 'react'
import * as THREE from 'three'

const TextTexture = ({ text, fontSize = 90 }) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const html = doc.body.firstChild;

    const canvas = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.font = `${fontSize}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(html.innerHTML, canvas.width / 2, canvas.height / 2);
        return canvas;
    }, [html.innerHTML, fontSize]);

    return useMemo(() => new THREE.CanvasTexture(canvas), [canvas]);
};

export default TextTexture;