import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Experience = () => {
    const [sunPosition, setSunPosition] = useState([0, 0, 0]);
    const timeFactor = 0.1; // Adjust this value to control the speed of the animation

    useFrame((state, delta) => {
        // Update sunPosition based on the specified steps and time factor
        if (sunPosition[1] < 1) {
            // Increment y value by 0.01 * timeFactor until it reaches 1
            setSunPosition([0, sunPosition[1] + 0.01 * timeFactor, 1]);
        } else if (sunPosition[2] > 0) {
            // Decrease z value by increments of 0.1 * timeFactor until it reaches 0
            setSunPosition([0, 1, sunPosition[2] - 0.1 * timeFactor]);
        } else if (sunPosition[1] > 0.9) {
            // Decrease y value by increments of 0.1 * timeFactor until it reaches 0.9
            setSunPosition([0, sunPosition[1] - 0.1 * timeFactor, -1]);
        } else if (sunPosition[1] > 0.01) {
            // Decrease y value by increments of 0.01 * timeFactor until it reaches 0.01
            setSunPosition([0, sunPosition[1] - 0.01 * timeFactor, -1]);
        } else if (sunPosition[1] > 0.001) {
            // Decrease y value by increments of 0.001 * timeFactor until it reaches 0.001
            setSunPosition([0, sunPosition[1] - 0.001 * timeFactor, -1]);
        }
    });

    return (
        <>
            <OrbitControls />
            <Environment preset="dawn" />
            <Sky
                distance={500}
                sunPosition={sunPosition}
                inclination={1}
                azimuth={1}
            />
        </>
    );
};

export default Experience;
