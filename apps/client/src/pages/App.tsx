import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Scroll, ScrollControls } from '@react-three/drei'
import MenuItemObjects from '../components/MenuItemObjects'
import MenuItemHTML from '../components/MenuItemHTML'

const MenuItems = () => {
  useFrame(({ pointer, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.8, 0.01)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(pointer.x * pointer.y * 8)), 0.01)
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, pointer.x * -Math.PI * 0.025, 0.001)
  })

  return (
  <ScrollControls pages={2}>
    <Scroll>
      <MenuItemObjects/>
    </Scroll>
    <Scroll html>
      <MenuItemHTML/>
    </Scroll>
  </ScrollControls>
  )
}

function App() {

  return (
    <Canvas dpr={[1, 2]}>  
      <mesh position={[0 ,0 ,-20]}>
        <planeGeometry args={[60,60, 20, 20]}/>
        <meshBasicMaterial color="blue" wireframe side={THREE.DoubleSide}/>
      </mesh>
      <MenuItems/>
    </Canvas>
  )
}

export default App
