import React, { useEffect } from 'react'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'


const Experience = () => {
    const model = useGLTF('./gym.glb');
    const floor = useGLTF('./floor.glb');

 


    useEffect(() => {
       floor.scene.traverse((child) => {
        if(child.isMesh) {
           if(child.material ) {
            console.log(child.material)
             child.material.color = new THREE.Color('#e4efe9');
             child.material.emissive  = new THREE.Color('#e4efe9');
             child.material.emissiveIntensity = 0.6;
             child.material.roughness = 0.3;
           }
        }
       })
    }, [floor]);

  return (
   <>
   <OrbitControls makeDefault />
   
   <primitive object={model.scene}  scale = {0.5} position = {[1, 0, 1.5]} castshadow/>
   <primitive object={floor.scene}/>



     
   </>
  )
}

export default Experience
