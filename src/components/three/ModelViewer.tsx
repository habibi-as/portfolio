// @ts-nocheck
'use client'

import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
// @ts-ignore - allow using GLTFLoader without installed type declarations
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// Removed typed import from 'three' to avoid missing type declarations

type ModelViewerProps = {
  url: string
  height?: number
  autoRotate?: boolean
  scale?: number | [number, number, number]
  fallback?: React.ReactNode
}

function Loader() {
  return (
    <div style={{ height: '100%' }} className="flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-neon-cyan border-t-transparent animate-spin" />
    </div>
  )
}

function GLTFModel({ url, scale = 1 }: { url: string; scale?: number | [number, number, number] }) {
  const gltf = useLoader(GLTFLoader, url)
  const group = useRef<any>(null)
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005
    }
  })
  return (
    <group ref={group}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <primitive object={gltf.scene as any} scale={scale as any} />
    </group>
  )
}

export default function ModelViewer({ url, height = 220, autoRotate = true, scale = 1, fallback }: ModelViewerProps) {
  const [available, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let mounted = true
    // Quick availability check to avoid throwing inside R3F if remote fails
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        if (!mounted) return
        setAvailable(res.ok)
      })
      .catch(() => mounted && setAvailable(false))
    return () => {
      mounted = false
    }
  }, [url])

  if (available === false && fallback) {
    return <div className="h-[220px]">{fallback}</div>
  }

  return (
    <Canvas camera={{ position: [2.5, 2.0, 2.5] }} style={{ height }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <Suspense fallback={<Loader />}> 
        {available !== false && <GLTFModel url={url} scale={scale} />}
      </Suspense>
    </Canvas>
  )
}

// Preload helper for better UX
// Preloading handled by browser HTTP cache via HEAD check above


