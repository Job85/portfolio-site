import React, { useRef, useEffect, useState } from "react";
import { extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ DragControls });

const Draggable = (props) => {
    const groupRef = useRef();
    const controlsRef = useRef();
    const [objects, setObjects] = useState();
    const { camera, gl, scene } = useThree();

    useEffect(() => {
        setObjects(groupRef.current.children);
    }, [groupRef]);

    useEffect(() => {
        if (scene.orbitControls) {
            const onHoverOn = () => {
                scene.orbitControls.enabled = false;
            };
            const onHoverOff = () => {
                scene.orbitControls.enabled = true;
            };

            controlsRef.current.addEventListener('hoveron', onHoverOn);
            controlsRef.current.addEventListener('hoveroff', onHoverOff);

            return () => {
                controlsRef.current.removeEventListener('hoveron', onHoverOn);
                controlsRef.current.removeEventListener('hoveroff', onHoverOff);
            };
        }
    }, [objects]);

    return (
        <group ref={groupRef}>
            <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
            {props.children}
        </group>
    );
}

export default Draggable;