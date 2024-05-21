import React, { useEffect, useRef } from 'react';

const DesmosCalculator = () => {
    const calculatorRef = useRef(null);

    useEffect(() => {
        // Dynamically load the Desmos API script
        const script = document.createElement('script');
        script.src = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
        script.async = true;
        script.onload = () => {
            // Initialize the Desmos calculator
            const elt = calculatorRef.current;
            const calculator = Desmos.GraphingCalculator(elt);
        };
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="calculator" ref={calculatorRef} style={{ position: 'absolute', top: '60%', margin:'20px', width: '550px', height: '340px', zIndex:'6' }}></div>;
};

export default DesmosCalculator;
