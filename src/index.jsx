import './style.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import Experience from './Experience.js' 
import DesmosCalculator from './assets/desmos.js'
import { useDebug, DebugPanel } from './assets/debug.js'
import Drawingboard from './assets/drawingboard.js'
import SmallCanvas from './assets/View.js'



function App() {
    const { backgroundColor, wireframe } = useDebug();
    const [cameraPosition, setCameraPosition] = useState([5, 5, 5]);

    return (
        <>
        <div style={{ height: '100vh', position: 'relative' }}>
            <DebugPanel />
                <Experience backgroundColor={backgroundColor} wireframe={wireframe} cameraPosition={cameraPosition} />
                <SmallCanvas setCameraPosition={setCameraPosition} />
        </div>
        <Drawingboard />
        <DesmosCalculator />
        </>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(<App />);