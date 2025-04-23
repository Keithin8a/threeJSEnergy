import { Gltf, useGLTF } from '@react-three/drei'

const WindTurbineModel = () => {
  const model = useGLTF('./public/torre_o_turbina_de_energia_eolica/scene.gltf')

  return <Gltf src='./public/torre_o_turbina_de_energia_eolica/scene.gltf' scale={0.1}/>
}

useGLTF.preload('./public/torre_o_turbina_de_energia_eolica/scene.gltf')

export default WindTurbineModel