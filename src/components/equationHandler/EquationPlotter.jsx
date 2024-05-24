import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Tube } from '@react-three/drei';
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { GridHelper } from 'three';
import EquationInput from './EquationInput';
import generatePoints from './generatePoints';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useMemo } from 'react';

import Polyhedron from './Polyhedron';

import Plane from './Plane';

import { Experience } from '../Experience'; 



//////////////////////////////////////////////////////////////////////

export const EquationPlotter = ({ backgroundColor }) => {
    const [points, setPoints] = useState([]);

    const handleEquationSubmit = (equation) => {
        const points = generatePoints(equation);
        setPoints(points);
    };


    

    const polyhedron = useMemo(
        () => [
            new THREE.BoxGeometry(),
            new THREE.SphereGeometry(0.785398),
            new THREE.DodecahedronGeometry(0.785398),
        ],
        []
    )

    const pB = useControls('Environment Light', {
        visible: true,
        Position: {
            value: { x: 0, y: 0 },
            step: 0.1,
            joystick: 'true',
        }

    })

    const eq = useControls('Equation', {
        color: { value: '#ff0000' },
        scale: { value: 1, min: 0.1, max: 2, step: 0.01 },
        radius: { value: 2, min: 2, max: 10, step: 1 },
        wireframe: false,
    })

    const options = useMemo(() => {
        return {
            x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            visible: true,
            color: { value: 'lime' },
            wireframe: false,
            Position: {
                value: { x: 0, y: 0, z: 0 },
            step: 0.1,
            },
        }
    }, [])

    const pA = useControls('Polyhedron A', options)
    
    // const pos = useControls('Position', options)
    
    



    

    


    return (
        <div style={{ height: '100vh', width: '100vw', position: 'absolute' }}>
            <EquationInput onSubmit={handleEquationSubmit} />
            
            <Canvas style={{ background: backgroundColor }} camera={{ position: [4, 4, -12], fov: 35 }}> 
                

                <ambientLight />
                
                
                {points.length > 0 && (
                    <Tube scale={[eq.scale, eq.scale, eq.scale]} args={[new THREE.CatmullRomCurve3(points), 64, 0.1, eq.radius, false]} >
                        <meshStandardMaterial attach="material" color={eq.color} wireframe={eq.wireframe} />
                    </Tube>
            )}

                

                <Polyhedron
                    position={[pA.Position.x, pA.Position.y, pA.Position.z]}
                    rotation={[pA.x, pA.y, pA.z]}
                    visible={pA.visible}
                    color={pA.color}
                    polyhedron={polyhedron}
                    wireframe={pA.wireframe}
                    
                />
                <pointLight
                    intensity={10}
                    position={[pB.Position.x, 3, pB.Position.y]}
                visible={pB.visible}
                color={pB.color}
            />

                
                <axesHelper args={[10]} position={[0, 0.1, 0]} />
                <gridHelper args={[100, 100]} />
                
                <OrbitControls
                    makeDefault
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                />
        </Canvas > 
            
                
        </div>
    );
};


// <axesHelper args={[10]} position={[0, 0.1, 0]} />

//<Polyhedron
//    position={[1, 1, 0]}
//    rotation={[pB.x, pB.y, pB.z]}
//    visible={pB.visible}
//    color={pB.color}
//    polyhedron={polyhedron}
//    wireframe={pB.wireframe}
///>