import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import DesmosCalculator  from "./components/Desmos";
 
import { OrbitControls, Stage } from "@react-three/drei";
import { EquationPlotter } from "./components/equationHandler/EquationPlotter";
import { useDebug, DebugPanel } from "./components/Debug";

function App() {
    const { backgroundColor } = useDebug();

  return (
      <>


          <DesmosCalculator />
          
          
           
          <EquationPlotter backgroundColor={backgroundColor} />
              
              
          
          
          
          
      <Interface />
    </>
  );
}

export default App;




//<Canvas camera={{ position: [4, 4, -12], fov: 35 }}>
//    <Experience />

//</Canvas>