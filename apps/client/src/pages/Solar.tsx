import { Html, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import SolarModel from "../components/SolarModel"

const Solar = () => {

  return (
    <Canvas dpr={[1, 2]}>  
        <OrbitControls/>
            <directionalLight color="white"/>
            <pointLight color="white" position={[0, 2, 2]} intensity={10} />
            <pointLight color="blue" position={[0, 2, -2]} intensity={10} />
            <pointLight color="red" position={[0, 6, -2]} intensity={10} />
            <SolarModel></SolarModel>
            <Html occlude position={[0,2,2]} style={{width: "200px"}}>1 - Datapoint Number Of Jobs Created</Html>
            <Html occlude position={[0,2,-2]} style={{width: "300px"}}>2 - Something else</Html>
            <Html occlude position={[0,6,-2]} style={{width: "300px"}}>3 - A third point from the db</Html>
    </Canvas>
  )
}

export default Solar