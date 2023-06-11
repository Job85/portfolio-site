import * as THREE from "three";
import { useMemo, useRef } from "react";
import Background from "./Background";
import { OrbitControls, Line, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Cloud from './Cloud';
import { Ship } from "./Ship";

const LINE_NB_POINTS = 4200;

const Experience = () => {

    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -10),
            new THREE.Vector3(-2, 0, -20),
            new THREE.Vector3(-3, 0, -30),
            new THREE.Vector3(0, 0, -40),
            new THREE.Vector3(5, 0, -50),
            new THREE.Vector3(7, 0, -60),
            new THREE.Vector3(5, 0, -70),
            new THREE.Vector3(0, 0, -80),
            new THREE.Vector3(0, 0, -90),
            new THREE.Vector3(0, 0, -100),
            new THREE.Vector3(0, 0, -190),
        ],
            false,
            "catmullrom",
            0.5)
    }, [])

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS);
    }, [curve])

    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, -0.5);
        shape.lineTo(0, -0.5);

        return shape;
    }, [curve])

    const cameraGroup = useRef();
    const scroll = useScroll();

    useFrame((_state, delta) => {
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        )
        const curPoint = linePoints[curPointIndex];
        const pointAhead = linePoints[Math.min(curPointIndex + 1), linePoints.length - 1];

        const xDisplacement = (pointAhead.x - curPoint.x) * 80;

        const angleRotation = (xDisplacement < 0 ? 1 : -1) *
            Math.min(Math.abs(xDisplacement), Math.PI / 3);

        cameraGroup.current.position.lerp(curPoint, delta * 24)
    })

    return (
        <>
            <OrbitControls
            // enableZoom={false}
            />
            <group ref={cameraGroup}>
                <Background />
                <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
                <Ship
                    scale={[0.2, 0.2, 0.2]}
                    position-y={-0.1}
                    rotation={[Math.PI, 0, Math.PI]}
                />
            </group>
            <group
                position-y={-2}
            >
                <Line
                    points={linePoints}
                    color={0x6F00FF}
                    opacity={0.7}
                    transparent
                    lineWidth={2}
                />
                <extrudeGeometry
                    args={[
                        shape,
                        {
                            steps: LINE_NB_POINTS,
                            bevelEnabled: false,
                            extrudePath: curve,
                        }
                    ]}
                />
                <meshStandardMaterial color={"purple"}
                    opacity={0.7}
                    transparent
                />
            </group>
            <Cloud groupPosition={[50, 0, -100]} />
            <Cloud groupPosition={[100.5, -0.5, -2]} />
            <Cloud groupPosition={[200, -0.2, -2]} />
            <Cloud groupPosition={[-184, -0.2, -95]} />
            <Cloud groupPosition={[-184, -0.2, -1295]} />
            {/* <Cloud groupPosition={[100.5, -0.2, -2 * CURVE_DISTANCE]} /> */}
        </>
    )
}

export default Experience



// const LINE_NB_POINTS = 5000;
// const CURVE_DISTANCE = 1250;
// const CURVE_AHEAD_CAMERA = 0.008;
// const FRICTION_DISTANCE = 42;
// const trackPoints = useMemo(() => [
//         new THREE.Vector3(0, 5, 0),
//         new THREE.Vector3(0, 5, -CURVE_DISTANCE),
//         new THREE.Vector3(1, 5, -2 * CURVE_DISTANCE),
//         new THREE.Vector3(2, 5, -3 * CURVE_DISTANCE),
//         new THREE.Vector3(3, 5, -4 * CURVE_DISTANCE),
//         new THREE.Vector3(8, 5, -5 * CURVE_DISTANCE),
//         new THREE.Vector3(17, 5, -6 * CURVE_DISTANCE),
//         new THREE.Vector3(20, 5, -7 * CURVE_DISTANCE),
//         // new THREE.Vector3(25, 5, -85),
//         // new THREE.Vector3(35, 5, -95),
//         // new THREE.Vector3(45, 5, -100),
//         // new THREE.Vector3(65, 5, -110),
//         // new THREE.Vector3(68, 5, -125),
//         // new THREE.Vector3(68, 5, -165),
//         // new THREE.Vector3(57, 5, -180),
//         // new THREE.Vector3(50, 5, -180),
//         // new THREE.Vector3(65, 5, -300),
//         // new THREE.Vector3(60, 5, -175),
//         // new THREE.Vector3(65, 5, -170),
//     ], []);

//     const sceneOpacity = useRef(0);
//     const lineMaterailRef = useRef();

//     const track = useMemo(() => {
//         return new THREE.CatmullRomCurve3(trackPoints, false, "catmullrom", 0.5);
//     }, []);

//     // const linePoints = useMemo(() => {
//     //     return track.getPoints(LINE_NB_POINTS);
//     // }, [track])

//     const shape = useMemo(() => {
//         const shape = new THREE.Shape();
//         shape.moveTo(0, -0.08);
//         shape.lineTo(0, 0.08);

//         return shape;
//     }, [track])

//     const cameraGroup = useRef();
//     const scroll = useScroll();
//     const cameraRail = useRef();
//     const camera = useRef();
//     const lastScroll = useRef()



//     useFrame((_state, delta) => {
//         const curPointIndex = Math.min(
//             Math.round(scroll.offset * trackPoints.length),
//             trackPoints.length - 1
//         )
//         // const curPoint = trackPoints[curPointIndex]

//         const scrollOffset = Math.max(0, scroll.offset);

//         let friction = 1;

//         let lerpedScrollOffset = THREE.MathUtils.lerp(
//             lastScroll.current,
//             scrollOffset,
//             delta * friction
//         );

//         lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
//         lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

//         const lookAtPoint = track.getPoint(
//             Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
//         );

//         const curPoint = track.getPoint(lerpedScrollOffset);

//         cameraGroup.current.position.lerp(curPoint, delta * 24)

//         const currentLookAt = cameraGroup.current.getWorldDirection(
//             new THREE.Vector3()
//         );

//         const targetLookAt = new THREE.Vector3()
//             .subVectors(curPoint, lookAtPoint)
//             .normalize();

//         const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);

//         cameraGroup.current.lookAt(
//             cameraGroup.current.position.clone().add(lookAt)
//         );
//         cameraGroup.current.position.lerp(curPoint, delta * 24)
//     })