import { OrbitControls, CatmullRomLine, useScroll, PerspectiveCamera } from "@react-three/drei";
import { useMemo } from "react";
import { CatmullRomCurve3, Vector3, Shape } from "three";
import * as THREE from "three";
import Background from "./Background";
import { Ship } from "./Ship";
import Marquee from "../Marquee";

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

    const curve = useMemo(() => {
        return new CatmullRomCurve3(travelPath.map((point) => new Vector3(...point)));
    }, [])

    // const shapePoints = useMemo(() => {
    //     const points = travelPoints.map((point) => new Vector3(point.x, point.y, 0));
    //     return points;
    // }, [travelPoints]);

    // const travelPoints = useMemo(() => {
    //     return curve.getPoints(PATH_NB_POINTS);
    // }, [curve])

    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, -0.5);
        shape.lineTo(0, -0.5);

        return shape;
    }, [curve]);

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
            <group
                position-y={-2}
            >
                <CatmullRomLine
                    points={travelPoints}
                    curveType="catmullrom"
                    tension={0.5}
                    color={0x90ff00}
                    lineWidth={4}
                />
                <extrudeGeometry
                    args={[
                        shape,
                        {
                            steps: PATH_NB_POINTS,
                            bevelEnabled: false,
                            extrudePath: curve,
                        }
                    ]}
                />
                <meshStandardMaterial
                    color={0x00ffef}
                    opacity={0.7}
                    transparent
                />
            </group>
            <Marquee
                position={[0, -0.1, -100]}
                text={"Resolving Complex\nProblems\nThrough Innovative\nand Efficient Design"}
            />
        </>
    )
}

export default Experience2