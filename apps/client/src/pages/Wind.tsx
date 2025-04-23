import { Html, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import WindTurbineModel from "../components/WindTurbineModel"

const Wind = () => {

  return (
    <Canvas dpr={[1, 2]}>  
        <OrbitControls/>
            <directionalLight color="white"/>
            <pointLight color="white" position={[0, 2, 2]} intensity={10} />
            <WindTurbineModel></WindTurbineModel>
            <Html occlude position={[0,0,0]} style={{width: "200px"}}>1 - Datapoint Number Of Jobs Created</Html>
            <Html occlude position={[0,2,0.3]} style={{width: "300px"}}>2 - Something else</Html>
    </Canvas>
  )
}

export default Wind