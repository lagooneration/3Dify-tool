import React, { useRef, useState, useEffect } from 'react';
import './Drawingboard.css';

const Whiteboard = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [tool, setTool] = useState('marker');
    const [strokes, setStrokes] = useState([]);
    const [currentStroke, setCurrentStroke] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext('2d');
        context.scale(1, 1);
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        contextRef.current = context;
    }, []);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
        setCurrentStroke([{ offsetX, offsetY, tool }]);
    };

    const finishDrawing = () => {
        if (!isDrawing) return;
        contextRef.current.closePath();
        setIsDrawing(false);
        setStrokes([...strokes, currentStroke]);
        setCurrentStroke([]);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setCurrentStroke([...currentStroke, { offsetX, offsetY, tool }]);
    };

    const changeTool = (newTool) => {
        setTool(newTool);
        if (newTool === 'eraser') {
            contextRef.current.strokeStyle = 'white';
            contextRef.current.lineWidth = 10;
        } else {
            contextRef.current.strokeStyle = 'black';
            contextRef.current.lineWidth = 5;
        }
    };

    const clearCanvas = () => {
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setStrokes([]);
    };

    const undoLast = () => {
        const newStrokes = strokes.slice(0, -1);
        setStrokes(newStrokes);
        redraw(newStrokes);
    };

    const redraw = (strokes) => {
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        strokes.forEach(stroke => {
            contextRef.current.beginPath();
            stroke.forEach(({ offsetX, offsetY, tool }) => {
                changeTool(tool);
                contextRef.current.lineTo(offsetX, offsetY);
                contextRef.current.stroke();
            });
            contextRef.current.closePath();
        });
    };

    return (
        <div className="whiteboard-container">
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                onMouseLeave={finishDrawing}
                className="drawing-canvas"
            />
            <div className="toolbar">
                <button onClick={() => changeTool('marker')}>Marker</button>
                <button onClick={() => changeTool('eraser')}>Eraser</button>
                <button onClick={undoLast}>Undo</button>
                <button onClick={clearCanvas}>Clear</button>
            </div>
        </div>
    );
};

export default Whiteboard;
