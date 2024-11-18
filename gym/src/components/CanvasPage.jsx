import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
const CanvasPage = () => {
  return (
   <>
     <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [4, 2, -2] } }>
        <Lights />
        <Experience />
     </Canvas>
   </>
  )
}

export default CanvasPage
