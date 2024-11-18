import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Experience = () => {
    const model = useGLTF('./gym.glb');

  return (
   <>
   <OrbitControls makeDefault />
   
   <primitive object={model.scene}  scale = {100}/>
     
   </>
  )
}

export default Experience
