import '../styles/cv.css'
//simport { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup


  /*
const Scene = new THREE.Scene();

const Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const Renderer = new THREE.WebGLRenderer({
  div: document.querySelector('#root'),
});

Renderer.setPixelRatio(window.devicePixelRatio);                  
Renderer.setSize(window.innerWidth, window.innerHeight);
Camera.position.setZ(0);
Camera.position.setX(3);

Renderer.render(Scene, Camera);

// Torus

const torusgeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const torusmaterial = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const Torus = new THREE.Mesh(torusgeometry, torusmaterial);

Scene.add(Torus);

//Square

const HackerTexture = new THREE.TextureLoader().load('CyberrCriminalFeatured.png');
const Hacker = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: HackerTexture }));

Scene.add(Hacker)

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
Scene.add(pointLight, ambientLight);

// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
Scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(Camera, Renderer.domElement);


// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
Scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load('preview16.jpg');

const jeff = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: jeffTexture }));

Scene.add(jeff);

// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const Moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

Scene.add(Moon);


//positions of objects

Torus.position.z = -1;

Moon.position.z = 30;
Moon.position.setX(-10);

jeff.position.z = 10;
jeff.position.setX(10)

Hacker.position.z = 20;
Hacker.position.x = 6;
Hacker.position.y = -5;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  Moon.rotation.x += 0.05;
  Moon.rotation.y += 0.075;
  Moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;


  //omg perfect rotation 0_0??!?
  Camera.position.z = t * -0.025;
  Camera.rotation.y = t * -2;
}

document.body.onscroll = moveCamera;
moveCamera();



// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  Torus.rotation.x += 0.01;
  Torus.rotation.y += 0.005;
  Torus.rotation.z += 0.01;

  Moon.rotation.x += 0.005;

  controls.update();

  Renderer.render(Scene, Camera);
}

animate();


  return (
    <div id="ThreeJScomponent" 
     ref={threeContainer => {this.threeContainer = threeContainer;}}/>
    );
  
  
  }

  */


  import * as THREE from "three"
  import React, { useRef, useEffect, useState } from "react"
  import { Canvas } from "@react-three/fiber"
  import { Block, useBlock } from "./block"
  import state from "./state.js"
  import {Html} from '@react-three/drei'
  import AdminPanel from '../sidepanel';


  const HappyMan = new THREE.TextureLoader().load('Happy-Person-Free-Download-PNG.png');



 
  function ProgessBar({ done, thing }){

    const [style, setStyle] = useState({})

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }

      setStyle(newStyle)
    }, 1000)

    return(
      <div id='skills-section'>
        <h1>{thing}</h1>
        <div className='amongusus'>
        
          <div className='progress'>
            <div className='progress-bar' style={style}>
              <span>{done}%</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function Plane({ color = "white", ...props }) {  
    return (
      <mesh {...props}>
        <planeGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    )
  }
  function Planes({ color = "white", ...props }) {  
    return (
      <mesh {...props}>
        <planeGeometry />
        <meshBasicMaterial color={color} map={HappyMan}/>
      </mesh>
    )
  }
  

  
  function Content({ left, children }) {
    const { contentMaxWidth, canvasWidth, margin } = useBlock()
    const aspect = 1.75
    const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
    return (

      <>
      <group>MAn</group>
      
      <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
        <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" />
        {children}
      </group>
      </>
    )
  }
  
  function Stripe() {
    const { contentMaxWidth } = useBlock()
    return (
      <Plane scale={[100, contentMaxWidth, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#e3f6f5" />
    )
  }
 

   export default function Cv() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
      <>
  
 
        <Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>

          <Block factor={1.5} offset={0} style={{color:"Black"}}>
         
           <Content left>
             <Planes position={[12,0,0]} rotation={[Math.PI /3, 0, 0.1]} scale={[5,5,5]}/>
           <Html center >
           <header>
              <h1>Faisal Hassan</h1>
              <p>🚀 Welcome to my website's Cv section!</p>
           </header>
            </Html>
           </Content>
          
          
          </Block>

          <Block factor={1.7} offset={0.5}>           
               <Html center>
                  <blockquote>
                    <p>I like programming and coding cool stuff!</p>
                  </blockquote>
                </Html>
          </Block>    
          
          {/* Second section */}
          <Block factor={1.9} offset={1}>
            <Content>
              <Html position={[-6,7,5]}>
                <h1>Languages</h1>
                <br />
              </Html>
             <Html position={[-5,6,5]}>
              
              <ProgessBar done={75} thing={"C, C#"}>MAn</ProgessBar>
              <ProgessBar done={75}  thing={"Python"}/>
              <ProgessBar done={90} thing={"Html"}/>
              <ProgessBar done={80} thing={"JavaScript"}/>
              <ProgessBar done={80} thing={"React"}/>
              <ProgessBar done={60} thing={"Redux"}/>
             </Html>
            </Content>
          </Block>

          {/* Stripe */}
          <Block factor={-1.0} offset={1}>
            <Stripe />
          </Block>
          
          {/* Last section */}

          <Block factor={-2} offset={1.5}>
            <Content>
            <Html position={[-5,5,5]}>
                <h1>Experience</h1>
                <div className='position'>
            <button style={{width:"50vh", height:"100%"}} onClick={() => setButtonPopup(true)}>Projetcs</button>
           <AdminPanel trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3 style={{color:"grey"}}>Here are my Projects</h3>
            <ul style={{color:"grey"}}>
              <li>Cs50 finance</li>
              <li>picture editor</li>
            </ul>
          </AdminPanel>
         </div>
              </Html>
            </Content>
          </Block>
         
          <Block factor={1.5} offset={2.5}>
            <Content left>
              <Block factor={-0.5}>
                <Html  position={[-5,5,5]}>
                  
                  <h1>Education</h1>
                  <div className='amongusus'>
                    <div>
                      <p>Self Taught</p>
                  <p>Took online courses Such as :-</p>
                  <ul>
                    <li>Introduction to Computer Science from Harvard or cs50 this mainly taught me the basics of Python and C, C# and html</li>
                   <hr/>
                    <li>I watched a lot of youtube videos in which i learned JavaScript and made me improve in the other Langauges</li>
                  </ul>
                   </div>

                   <div>
                     <p>School:-</p>
                     <ul>
                       <li>Country: United Arab Emirates</li>
                        <hr />
                       <li>I went to Emirates Private School</li>
                       <hr />
                       <li>2007-2021</li>
                       <li>British corriculum</li>
                     </ul>
                   </div>
                  </div>
                </Html>

                
              </Block>
            </Content>
          </Block>
          
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${state.pages * 100 - 45}vh` }} />
        </div>
      </>
      
    )
  }

  