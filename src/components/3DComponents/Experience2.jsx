import { OrbitControls, CatmullRomLine, useScroll, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { CatmullRomCurve3, Vector3, Shape } from "three";
import * as THREE from "three";
import Background from "./Background";
import Cloud from "./Cloud";
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
        [0, 0, -50],
        [0, 0, -60],
        [0, 0, -70],
        [0, 0, -80],
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
    }, [travelPath]);

    const curve = useMemo(() => {
        return new CatmullRomCurve3(travelPath.map((point) => new Vector3(...point)));
    }, []);

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

    const scroll = useScroll();
    const cameraGroup = useRef();
    const shipRef = useRef();

    useFrame((_state, delta) => {

        const scrollOffset = Math.max(0, scroll.offset);
        const curPointIndex = Math.min(
            Math.round(scroll.offset * (PATH_NB_POINTS - 1)),
            PATH_NB_POINTS - 1
        );
        const curPoint = travelPoints[curPointIndex];
        // const pointAhead = travelPoints[Math.min(curPointIndex + 1, travelPoints.length - 1)];

        cameraGroup.current.position.lerp(curPoint, delta * 24);

        const lookAtPoint = curve.getPoint(
            Math.min(scrollOffset + 0.008, 1)
        );

        const currentLookAt = cameraGroup.current.getWorldDirection(
            new THREE.Vector3()
        );

        const targetLookAt = new THREE.Vector3().subVectors(curPoint, lookAtPoint).normalize();

        const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);

        cameraGroup.current.lookAt(
            cameraGroup.current.position.clone().add(lookAt)
        );
    });

    return (
        <>
            {/* <OrbitControls /> */}
            <Background />
            <group ref={cameraGroup}>
                <Ship
                    ref={shipRef}
                    scale={[0.5, 0.5, 0.5]}
                    position-y={-0.5}
                    rotation={[0, Math.PI, 0]}
                />
                <PerspectiveCamera
                    position={[0, 1.5, 8]}
                    fov={30}
                    makeDefault
                />
            </group>
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
            <Cloud groupPosition={[50, 0, -100]} />
            <Cloud groupPosition={[100.5, -0.5, -290]} />
            <Cloud groupPosition={[200, -0.2, -320]} />
            <Cloud groupPosition={[-184, -0.2, -950]} />
            <Cloud groupPosition={[-184, -0.2, -1295]} />
        </>
    )
}

export default Experience2