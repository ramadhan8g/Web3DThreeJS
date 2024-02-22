import { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {

  const sky = useGLTF(skyScene);
  const skyRef = useRef();


    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      // saat berputar
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
           <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky