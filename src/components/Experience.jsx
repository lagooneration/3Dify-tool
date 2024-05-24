import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Table } from "./Table";
import * as THREE from 'three';
import React from 'react';
import { useControls } from 'leva';
import { useMemo } from 'react';

import { EquationPlotter } from "./equationHandler/EquationPlotter";









export const Experience = () => {
    const { legs } = useConfigurator(); 

    


  return (
      <>
          
      
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
            color: 'black',
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
          >

          
        
                  
              


                  
              <OrbitControls
                  makeDefault
                  minPolarAngle={0}
                  maxPolarAngle={Math.PI / 2}
              />
              
      </Stage>
      
        
        
      

    </>
  );
};
