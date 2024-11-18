import React, { useEffect, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'


const Experience = () => {
    const model = useGLTF('./gym.glb');
    const floor = useGLTF('./floor.glb');
    const pool = useGLTF('./pool.glb');




    useEffect(() => {
       floor.scene.traverse((child) => {
        if(child.isMesh) {
           if(child.material ) {
            console.log(child.material)
             child.material.color = new THREE.Color('#886AEA');
             child.material.emissive  = new THREE.Color('#886AEA');
             child.material.emissiveIntensity = 0.3;
             child.material.roughness = 0.3;
           }
        }
       });

 
    }, [floor]);

  return (
   <>
   <OrbitControls makeDefault />
   
   
   <primitive object={model.scene}  scale = {0.5} position = {[1, 0, 1.5]} castshadow/>
   <primitive object={floor.scene}/>

   <primitive object={pool.scene} scale = {0.12} position = {[-1, 0.5, -3.5]} />
   



     
   </>
  )
}

export default Experience
