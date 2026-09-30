"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { AmbientLight, DirectionalLight, Mesh, BoxGeometry, MeshStandardMaterial } from 'three'
import React from 'react'

export default function ArchitectureVisualizer(){
  const ambient = React.useMemo(() => new AmbientLight(0xffffff, 0.5), [])
  const directional = React.useMemo(() => { const l = new DirectionalLight(0xffffff, 1); l.position.set(5,5,5); return l }, [])
  const box = React.useMemo(() => new Mesh(new BoxGeometry(1.5,1.5,1.5), new MeshStandardMaterial({ color: '#00D4FF' })), [])

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
      {/* @ts-ignore */}
      <primitive object={ambient} />
      {/* @ts-ignore */}
      <primitive object={directional} />
      {/* @ts-ignore */}
      <primitive object={box} />
      <OrbitControls />
    </Canvas>
  )
}
