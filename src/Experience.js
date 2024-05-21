import React, { useEffect, useRef  } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'; 
import { GridHelper } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
export default function Experience({ backgroundColor, wireframe})

{
   
    

    const GridHelperComponent = ({ size = 100, divisions = 100, colorCenterLine = 0xffffff, colorGrid = 0x888888 }) => {
        const { scene } = useThree();

        React.useEffect(() => {
            const gridHelper = new GridHelper(size, divisions, colorCenterLine, colorGrid);
            scene.add(gridHelper);

            // Clean up function to remove the grid helper when the component is unmounted
            return () => {
                scene.remove(gridHelper);
            };
        }, [scene, size, divisions, colorCenterLine, colorGrid]);

        return null;
    };

    




    return (  
       
     
        <Canvas style={{ background: backgroundColor }}>
        
        <GridHelperComponent />
        <ambientLight position={[2.94, -1.06, 5.36]} visible={true} />
        <directionalLight intensity={-6.68} position={[0, 2.22, -5.5]} visible={true} castShadow={true} receiveShadow={false} />
        <directionalLight intensity={1.02} position={[0, 2.32, 7.2]} visible={true} castShadow={true} />
        <mesh>
            <torusKnotGeometry  />
            <meshNormalMaterial wireframe={wireframe} />
        </mesh>
        <OrbitControls />
        </Canvas>     
        
    );
 

}
