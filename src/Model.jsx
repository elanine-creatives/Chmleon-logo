import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/elanine_chmleon.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0003_1.geometry} material={materials['Steel Satin metal']} />
      <mesh geometry={nodes.Mesh_0003_2.geometry} material={materials['Steel Satin metal']} />
    </group>
  )
}

useGLTF.preload('/elanine_chmleon.glb')
