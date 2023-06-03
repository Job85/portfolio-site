import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";



const Experience = () => {
    const [sunPos, setSunPos] = useState([0, 0, 0])

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        if (elapsedTime < 5) {
            setSunPos([0, 0, 1]);
        } else if (elapsedTime < 10) {
            const progress = elapsedTime - 1;
            const z = 50 - progress * 5;
            setSunPos([0, 1, z])
        } else {
            const progress = elapsedTime - 10;
            const z = -progress * 5;

            setSunPos([0, 1, z])
        }
    })

    // useFrame(({ clock }) => {
    //     const elapsedTime = clock.getElapsedTime();

    //     const cycleDuration = 30;
    //     const progress = elapsedTime % cycleDuration;

    //     if (progress < 5) {
    //         const z = 1 - progress * 0.2;
    //         setSunPos([0, 0, z]);
    //     } else {
    //         const z = (progress -5) * 0.2
    //         setSunPos([0, 1, z]);
    //     }
    // });
    return (
        <>
            <OrbitControls />
            <Environment preset="dawn" />
            <Sky
                distance={450000}
                sunPosition={sunPos}
                inclination={1}
                azimuth={0.25}
            />
        </>
    )
}

export default Experience