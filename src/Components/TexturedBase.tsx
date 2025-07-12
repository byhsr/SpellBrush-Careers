import { useTexture } from "@react-three/drei"



const TexturedBase = () => {
    const texture = useTexture('/imgs/texture1.jpg')
    return (
       
        <mesh
        castShadow
        receiveShadow
        position={[0, -1.41, 0]}
        > 
           
            <cylinderGeometry args={[0.6, 0.4, 0.8, 64]}/>
            <meshPhysicalMaterial map={texture} 
            roughness={0.8}
            metalness={0.4}
            />
        </mesh>
    )
}


export default TexturedBase

