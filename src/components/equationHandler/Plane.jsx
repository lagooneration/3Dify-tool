const Plane = () => (
  <mesh>
        <planeGeometry args={[2, 2]} position={[2, 2, 0]} rotation={[0, Math.PI / 4, 0]} />
    <meshBasicMaterial color="white" />
  </mesh>
);

export default Plane;