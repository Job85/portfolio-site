import { OrbitControls, CatmullRomLine, useScroll, PerspectiveCamera } from "@react-three/drei";
import { useMemo } from "react";
import Background from "./Background";
import { Ship } from "./Ship";
import Marquee from "../Marquee";
import { CatmullRomCurve3, Vector3 } from "three";

const PATH_NB_POINTS = 4200;

const Experience2 = () => {
    const travelPath = [
        [0, 0, 0],
        [0, 0, -10],
        [-2, 0, -20],
        [-3, 0, -30],
        [0, 0, -40],
        [5, 0, -50],
        [7, 0, -60],
        [9, 0, -70],
        [5, 0, -80],
        [0, 0, -90],
        [0, -8, -100],
        [50, 0, -190],
        [200, 0, -390],
        [145, 0, -500],
        [124, 0, -590],
    ];

    const travelPoints = useMemo(() => {
        const curve = new CatmullRomCurve3(travelPath.map((point) => new Vector3(...point)));
        return curve.getPoints(PATH_NB_POINTS);
    }, [travelPath])

    return (
        <>
            <OrbitControls />
            <Background />
            <Ship
                scale={[0.2, 0.2, 0.2]}
                position-y={-0.5}
                rotation={[0, Math.PI, 0]}
            />
            <PerspectiveCamera
                position={[0, 0, 5]}
                fov={30}
                makeDefault
            />
            <CatmullRomLine
                points={travelPoints}
                curveType="catmullrom"
                tension={0.5}
                color={0x90ff00}
                lineWidth={4}
            />
            <Marquee
                position={[0, -0.1, -100]}
                text={"Resolving Complex\nProblems\nThrough Innovative\nand Efficient Design"}
            />
        </>
    )
}

export default Experience2