import React from "react";

const Platform = ({ position, width, height, rotation, color }) => {

    return (
        <mesh
            position={position}
            rotation={rotation}
        >
            <planeGeometry
                args={[width, height]}
            />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

export default Platform