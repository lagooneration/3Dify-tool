import React, { useState } from 'react';

const EquationInput = ({ onSubmit }) => {
    const [equation, setEquation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(equation);
    };

    return (
        <form className="subscribe-form" onSubmit={handleSubmit} style={{ position: 'absolute', top: '56%', left: '300px', zIndex: 4 }}>
            <input
                className="subscribe-input"
                type="text"
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
                placeholder="Enter equation (y=sinx)"
            />
            <button className="subscribe-btn" type="submit">Plot</button>
        </form>
    );
};

export default EquationInput;
