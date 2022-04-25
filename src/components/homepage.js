import  React, { Suspense, useRef } from 'react'
import './styles/homepage.css'
import './styles/nigga.css'
import TopSection from './sections/topsection';
import ShootingStars from './animations/starsAnimation';
import { useGLTF, Stars, OrbitControls, PerspectiveCamera  } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import sun from './sun2.jpg'
import cat from './cat.gif'
import ground from './ground.jpg'
import ship from './ship.jpg'


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
          <group position={[Math.floor(Math.random()*-250),Math.floor(Math.random()*250), Math.floor(Math.random()*250)]} rotation={[-1.88, 0.09, -1.71]} scale={[1.17, 1.17, 1.17]}>
            <mesh geometry={nodes.mesh_0.geometry} material={materials.Pedra1} />
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
      
  <Parallax pages={4}>
  
  <ParallaxLayer offset={0}speed={1}>

  
  <Canvas>
  
    <Stars radius={100} depth={50} count={750} factor={4} saturation={0} fade />
    

    <Suspense fallback={null}>
      <PerspectiveCamera position={[0,0,0]}>
      <ambientLight intensity={0.6} />
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


  </ParallaxLayer>

  <ParallaxLayer offset={0.8} factor={2} speed={2} style={{
    backgroundImage:`url(${sun})`,
    backgroundSize: 'cover',
  }}>
  </ParallaxLayer>
  <ParallaxLayer offset={1.4} speed={1}>
    <h2 style={{display:"flex", justifyContent:"center", color:"gray-white"}}
    >Welcome to my Website!</h2>
  </ParallaxLayer>
  <ParallaxLayer offset={2} speed={1} factor={2}sticky={{ start: 2, end:3.4}} style={{ textAlign: 'center' }}>
  <img src={cat} alt="" />
  </ParallaxLayer>
  <ParallaxLayer offset={1.9} speed={2} factor={2} style={{
    backgroundImage:`url(${ship})`,
    backgroundSize: 'cover',}}>
      
      </ParallaxLayer>
  <ParallaxLayer offset={2.8} speed={1.2} factor={2.1} style={{
    backgroundImage:`url(${ground})`,
    backgroundSize: 'cover',
  }}> </ParallaxLayer>
  <ParallaxLayer offset={3.6677766555}>
    <h1>Look around and learn more about me!</h1>
  </ParallaxLayer>

  </Parallax>       
    
    </>
    )
}

export default Homepage