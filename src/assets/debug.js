import { Leva, useControls } from 'leva'
import { useState } from 'react'



export function useDebug() {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [wireframe, setWireframe] = useState(false);

    useControls({
        BackgroundColor: {
            value: '#183e50',
            label: 'Background Color',
            onChange: (value) => setBackgroundColor(value)
        },
        Wireframe: {
            value: false,
            label: 'Wireframe Mode',
            onChange: (value) => setWireframe(value),
        },
    });

    return { backgroundColor, wireframe };
}

export function DebugPanel() {
    return <Leva collapsed />;
}