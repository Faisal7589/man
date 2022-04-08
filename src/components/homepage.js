import  React, { Suspense, useRef, useState } from 'react'
import './styles/homepage.css'
import './styles/nigga.css'
import TopSection from './sections/topsection';
import ShootingStars from './animations/starsAnimation';
import { useGLTF, Stars, OrbitControls, PerspectiveCamera  } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';


function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene(1).glb')
  return (
    <group position={[0,-30,0]} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 50, 50]}>
            <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial} />
          </group>
        </group>
      </group>
    </group>
  )
}
function Asteroids({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('asteroids.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[Math.floor(Math.random()*-250),Math.floor(Math.random()*250), Math.floor(Math.random()*-250)]} rotation={[-1.88, 0.09, -1.71]} scale={[1.17, 1.17, 1.17]}>
            <mesh geometry={nodes.mesh_0.geometry} material={materials.Pedra1} />
          </group>
          <group position={[Math.floor(Math.random()*250),Math.floor(Math.random()*-250), Math.floor(Math.random()*250)]} rotation={[1.78, -0.35, 0.03]} scale={[1.1, 1.1, 1.1]}>
            <mesh geometry={nodes.mesh_1.geometry} material={materials.Pedra2} />
          </group>
          <group position={[Math.floor(Math.random()*250), Math.floor(Math.random()*-250), Math.floor(Math.random()*-250)]} rotation={[0.9, -0.66, 0.39]} scale={1.16}>
            <mesh geometry={nodes.mesh_2.geometry} material={materials.Pedra3} />
          </group>
        </group>
      </group>
    </group>
  )
}




const Homepage = () => {


return(
      <>
   
      <div> < ShootingStars /> </ div>

      <div> <TopSection /> </div> 
         
  <Canvas>

    
    <Stars radius={100} depth={50} count={750} factor={4} saturation={0} fade />

    <ambientLight intensity={0.5} />
    <Suspense fallback={null}>


      <PerspectiveCamera position={[0,0,0]}>
        
        <OrbitControls  enablePan={false} autoRotate autoRotateSpeed={0.3} />\
        <Model position={[0,-50,-200]} rotation={[Math.PI,0,0]} />
        <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />
         <Asteroids />

      </PerspectiveCamera>
        
        
        
        
    </Suspense>
      
    
  </Canvas>

        
    
    </>
    )
}

export default Homepage