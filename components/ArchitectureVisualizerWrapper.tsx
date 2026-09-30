"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const ArchitectureVisualizer = dynamic(() => import('./ArchitectureVisualizer'), { ssr: false })

export default function ArchitectureVisualizerWrapper(){
  return <ArchitectureVisualizer />
}
