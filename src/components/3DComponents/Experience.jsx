import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

const Experience = () => {
    const [sunPosition, setSunPosition] = useState([0, 0, 0]);
    console.log(sunPosition)
    const [animationStarted, setAnimationStarted] = useState(false);
    const [animationStage, setAnimationStage] = useState(0);
    // const [cloud, setCloud] = useState("dawn"); // "sunset" | "dawn" | "night" | "warehouse" | "forest" | "apartment" | "studio" | "city" | "park" | "lobby"
    const [azimuth, setAzimuth] = useState(0.8);
    const [inclination, setInclination] = useState(0.3);
    const timeFactor = 0.1; // Adjust this value to control the speed of the animation

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationStarted(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useFrame(() => {
        if (animationStarted) {
            switch (animationStage) {
                case 0:
                    if (sunPosition[1] > -0.1 && sunPosition[2] < 2.5) {
                        setSunPosition([0, -0.1, 2.4]);
                        // setCloud("city");
                        setAzimuth(0.25);
                        setInclination(0.5);
                    } else {
                        setAnimationStage(1);
                    }
                    break;
                case 1:
                    if (sunPosition[2] < 3.5) {
                        setSunPosition([0, -0.1, sunPosition[2] + 0.1 * timeFactor]);
                    } else {
                        setAnimationStage(2);
                    }
                    break;
                case 2:
                    if (sunPosition[2] < 10.5) {
                        setSunPosition([0, -0.1, sunPosition[2] + 1 * timeFactor]);
                        // setCloud("sunset")
                    } else {
                        setAnimationStage(3);
                    }
                    break;
                case 3:
                    if (sunPosition[2] < 15.5) {
                        setSunPosition([0, -0.1, sunPosition[2] + 5 * timeFactor]);
                    } else {
                        setAnimationStage(4);
                    }
                    break;
                case 4:
                    if (sunPosition[2] < 35.5) {
                        setSunPosition([0, -0.1, sunPosition[2] + 10 * timeFactor]);
                        // setCloud("dawn")
                    } else {
                        setAnimationStage(5);
                    }
                    break;
                case 5:
                    if (sunPosition[2] < 100) {
                        setSunPosition([0, -0.1, sunPosition[2] + 30 * timeFactor]);
                    } else {
                        setAnimationStage(6);
                    }
                    break;
                case 6:
                    if (sunPosition[1] < 10) {
                        setSunPosition([0, sunPosition[1] + 1 * timeFactor, 105.5]);
                    } else {
                        setAnimationStage(7);
                    }
                    break;
                case 7:
                    if (sunPosition[1] < 600) {
                        setSunPosition([0, sunPosition[1] + 50 * timeFactor, 105.5]);
                    } else {
                        setAnimationStage(8);
                    }
                    break;
                case 8:
                    if (sunPosition[1] < 1000) {
                        setSunPosition([0, sunPosition[1] + 100 * timeFactor, 105.5])
                    } else {
                        setAnimationStage(9);
                    }
                    break;
                case 9:
                    if (sunPosition[2] === 105.5) {
                        setSunPosition([0, 1, 0.105])
                    } else {
                        setAnimationStage(10);
                    }
                    break;
                case 10:
                    if (sunPosition[2] > -3) {
                        setAzimuth(0.1);
                        setInclination(0.25);
                        setSunPosition([0, 1, sunPosition[2] - 0.1 * timeFactor])
                    } else {
                        setAnimationStage(11)
                    }
                    break;
                case 11:
                    if (sunPosition[2] <= -3) {
                        setSunPosition([0, 0.1, -0.3])
                        // setCloud('sunset')
                    } else {
                        setAnimationStage(12)
                    }
                    break;
                case 12:
                    if (sunPosition[2] > -2.5) {
                        setSunPosition([0, 0.1, sunPosition[2] - 1 * timeFactor])
                        // setCloud('city')
                    } else {
                        setAnimationStage(13)
                    }
                    break;
                case 13:
                    if (sunPosition[1] >= -0.101) {
                        setSunPosition([0, sunPosition[1] - 0.01 * timeFactor, -2.5])
                    } else {
                        // setCloud('night')
                        setAnimationStage(14)
                    }
                    break;
                default:
                    break;
            }
        }
    })

    return (
        <>
            <OrbitControls />
            <Environment files="hdri/kiara_1_dawn_4k.hdr" />
            <Sky
                distance={450000}
                sunPosition={sunPosition}
                inclination={1}
                azimuth={0.1}
                turbidity={0} // 0 - 20
                rayleigh={0.05} // 0 - 4
            // elevation={1}
            />
        </>
    );
};

export default Experience;
