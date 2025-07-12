import { useGLTF } from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { jobContext } from "../pages/HomeLayout";


const Model = () => {

   const ctxt = useContext(jobContext)
   if(!ctxt) throw new Error ("outsite context")

    const {setLoading} = ctxt

  const { nodes } = useGLTF("/3dmodel/scene.gltf" , true );

  useEffect(()=>{
    if(nodes.Object_15){
   
        setLoading(false)
     
    }
  },[nodes.Object_15])

  const modelRef = useRef<THREE.Object3D>(null);

      useFrame(({ clock }) => {
    if (!modelRef.current) return;

    const t = clock.getElapsedTime(); 
    const floatY = Math.sin(t * 2) * 0.02; 


    modelRef.current.position.y = -1 + floatY;
  });

  return (
    <primitive
      ref={modelRef}
      object={nodes.Object_15}
      scale={0.3}
      position={[0, -1, 0]}
      rotation={[-Math.PI / 2, -0.01, -0.3]} 
    />
  );
};

useGLTF.preload("/3dmodel/scene.gltf");
export default Model;
