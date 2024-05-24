import { Leva, useControls } from 'leva';
import { useState } from 'react';

//let bg = useControls({
//    BackgroundColor: {
//        value: '#183e50',
//        label: 'Background Color',
//        onChange: (value) => setBackgroundColor(value)
//    },
//})


export function useDebug() {
    const [backgroundColor, setBackgroundColor] = useState('white');

    useControls({
        BackgroundColor: {
            value: '#183e50',
            label: 'Background Color',
            onChange: (value) => setBackgroundColor(value)
        },
    });

    

    return { backgroundColor };
}

export function DebugPanel() {
    return <Leva />;
}