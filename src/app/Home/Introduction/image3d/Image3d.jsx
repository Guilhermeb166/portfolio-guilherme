' use client'
import styles from './Image3d.module.css'

import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'
import { TextureLoader } from 'three'

function useResponsiveValue(valuesByBreakpoint) {
  const [value, setValue] = useState(valuesByBreakpoint.default)

  useEffect(() => {
    function getResponsiveValue() {
      const width = window.innerWidth
      const breakpoints = Object.keys(valuesByBreakpoint)
        .map(Number)
        .filter((n) => !isNaN(n))
        .sort((a, b) => a - b)

      let selected = valuesByBreakpoint.default || null
      for (const bp of breakpoints) {
        if (width <= bp) {
          selected = valuesByBreakpoint[bp]
          break
        }
      }
      return selected || valuesByBreakpoint.default
    }

    const handleResize = () => setValue(getResponsiveValue())
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return value
}


function Model({ open, hinge, ...props }) {

  const screenTexture = useLoader(TextureLoader, '/terminal.gif')
  screenTexture.flipY = false
  const group = useRef()
  const { nodes, materials } = useGLTF('/mac-draco.glb')
  const [hovered, setHovered] = useState(false)

  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 60 : 0, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 80 : 0, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
  })

  return (
    <group ref={group} {...props} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={(e) => setHovered(false)} dispose={null}>
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          {/*<mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />*/}
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
          </mesh>
        </group>
      </three.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]} scale={[1, 1.3, 1]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function Image3d() {
  const [open, setOpen] = useState(false)
  const props = useSpring({ open: Number(open) })

  const breakpoints = useMemo(() => ({
    1200: [0, 4, 0],
    1024:[0, 3, 0],
    default: [-2, 0, 0]
  }), [])

  const notePosition = useResponsiveValue(breakpoints)

  // assim que o componente montar, dispara a abertura
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1500);
    return () => clearTimeout(timer)
  }, [])


  return (
    <web.main style={{ background: props.open.to([0, 1], ['transparent']), height: '100%' }}>
      <Canvas dpr={[1, 8]} camera={{ position: [-0, -0, -45], fov: 30 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['transparent'])} onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI * 0.95, 0]} scale={1.4} position={notePosition} onClick={(e) => (e.stopPropagation(), setOpen(!open))} >
            <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment files="/hdri/potsdamer_platz_1k.hdr" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      </Canvas>
    </web.main>
  )
}
