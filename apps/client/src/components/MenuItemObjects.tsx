import { useThree } from "@react-three/fiber"
import SolarModel from "./SolarModel";
import * as THREE from 'three'
import WindTurbineModel from "./WindTurbineModel";
import { Suspense } from "react";


const MenuItemObjects = () => {
    const {height, width} = useThree((state) => state.viewport);

    return (
        <>
        <directionalLight color="white"/>
            <group position={[width/6 ,0 ,0]}>
            <pointLight color="white" position={[0, 2, 2]} intensity={10} />
                <mesh >
                    <Suspense fallback={null}>
                        <SolarModel scale={[0.3, 0.3, 0.3]} rotation={[0, Math.PI, 0]}/>
                    </Suspense>
                    <meshBasicMaterial color="green" wireframe side={THREE.DoubleSide}/>
                </mesh>
                <mesh rotation={[-Math.PI/2,0,0]}>
                    <planeGeometry args={[8,4, 20, 20]}/>
                    <meshBasicMaterial color="green" wireframe side={THREE.DoubleSide}/>
                </mesh>
            </group>
            <group position={[-width/3, -height/1.3, 0]}>
                <mesh>
                    <Suspense fallback={null}>
                        <WindTurbineModel/>
                    </Suspense>
                </mesh>
                <mesh rotation={[-Math.PI/2,0,0]}>
                    <planeGeometry args={[8,4, 20, 20]}/>
                    <meshBasicMaterial color="green" wireframe side={THREE.DoubleSide}/>
                </mesh>
            </group>
        </>
    )
}

export default MenuItemObjects