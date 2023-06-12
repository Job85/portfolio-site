import { OrbitControls, Line, CatmullRomLine } from "@react-three/drei";
import Background from "./Background";
import { Ship } from "./Ship";
import Marquee from "../Marquee";

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
        [0, -5, -100],
        [0, 0, -190],
        [0, 0, -390],
        [0, 0, -500],
        [0, 0, -590],
    ];
    return (
        <>
            <OrbitControls />
            <Background />
            <Ship
                rotation={[0, Math.PI, 0]}
            />
            <CatmullRomLine
                points={travelPath}
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