/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Ship.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ship(props) {
  const { nodes, materials } = useGLTF('/models/ship/ship.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.45, -1.05]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BackSail_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.BackSail_2.geometry} material={materials.Fabric} />
      </group>
      <group position={[0, 2.05, 1.13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Front_Sail_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Front_Sail_2.geometry} material={materials.Fabric} />
      </group>
      <group position={[0, 2.49, 0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.MidleSail_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.MidleSail_2.geometry} material={materials.Fabric} />
      </group>
      <group position={[0, -0.07, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BigShip_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.BigShip_2.geometry} material={materials.Fabric} />
        <mesh geometry={nodes.BigShip_3.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.BigShip_4.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.BigShip_5.geometry} material={materials.DarkRed} />
      </group>
      <mesh geometry={nodes.Rudder.geometry} material={materials.Wood} position={[0, 1.27, -1.91]} rotation={[-Math.PI, 0, 0]} scale={[8.69, 8.69, 1.29]} />
    </group>
  )
}

useGLTF.preload('/Ship-transformed.glb')
