import * as THREE from 'three';
import { evaluate } from 'mathjs';

const generatePoints = (equation, range = [-10, 10], steps = 1000) => {
    const points = [];
    const stepSize = (range[1] - range[0]) / steps;

    for (let x = range[0]; x <= range[1]; x += stepSize) {
        const scope = { x };
        const y = evaluate(equation, scope);
        points.push(new THREE.Vector3(x, y, 0));
    }

    return points;
};

export default generatePoints;
