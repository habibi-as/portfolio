'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export function PreviewCube() {
  return (
    <Canvas camera={{ position: [2.5, 2.5, 2.5] }} style={{ height: 220 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <mesh rotation={[0.4, 0.6, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          {/* @ts-ignore - relax material prop typing for r3f JSX */}
          <meshStandardMaterial color={'#00ffff'} emissive={'#00ffff'} emissiveIntensity={0.2} />
        </mesh>
      </Suspense>
      {/* Removed OrbitControls to avoid drei dependency */}
    </Canvas>
  )
}

export function PreviewShield() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }} style={{ height: 220 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <mesh rotation={[0, 0.4, 0]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          {/* @ts-ignore - relax material prop typing for r3f JSX */}
          <meshStandardMaterial color={'#00ff88'} emissive={'#00ff88'} emissiveIntensity={0.3} />
        </mesh>
      </Suspense>
      {/* Removed OrbitControls to avoid drei dependency */}
    </Canvas>
  )
}

export function PreviewJoystick() {
  return (
    <Canvas camera={{ position: [0, 0.7, 2.6] }} style={{ height: 220 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={1} />
      <Suspense fallback={null}>
        <mesh rotation={[0.3, 0.6, 0]}>
          <coneGeometry args={[0.6, 1.2, 32]} />
          {/* @ts-ignore - relax material prop typing for r3f JSX */}
          <meshStandardMaterial color={'#ff00ff'} emissive={'#ff00ff'} emissiveIntensity={0.2} />
        </mesh>
      </Suspense>
      {/* Removed OrbitControls to avoid drei dependency */}
    </Canvas>
  )
}



