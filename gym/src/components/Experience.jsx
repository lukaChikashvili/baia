import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Experience = () => {
    const model = useGLTF('./gym.glb');
    const floor = useGLTF('./floor.glb');

  return (
   <>
   <OrbitControls makeDefault />
   
   <primitive object={model.scene}  scale = {0.5} position = {[1, 0, 1.5]} />
   <primitive object={floor.scene}/>


     
   </>
  )
}

export default Experience
