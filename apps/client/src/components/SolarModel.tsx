import { useGLTF } from '@react-three/drei'

//The original Model had a broken solar panel array next to the complete one
//This file takes the individual parts of the geometry and uses only the complete solar panel array

const SolarModel = (props: any) => {
  const { nodes, materials } = useGLTF('./public/large_solar_panel_array/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, -0.001, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FoundationElement_LargeSolarPanelArray_0.geometry}
            material={materials.LargeSolarPanelArray}
          />
          <group position={[0, 0, 4.147]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rotator_LargeSolarPanelArray_0.geometry}
              material={materials.LargeSolarPanelArray}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SolarPanelArray_LargeSolarPanelArray_0.geometry}
              material={materials.LargeSolarPanelArray}
              position={[0, 0, 0.704]}
              rotation={[Math.PI / 4, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ladders_LargeSolarPanelArray_0.geometry}
            material={materials.LargeSolarPanelArray}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./public/large_solar_panel_array/scene.gltf')

export default SolarModel