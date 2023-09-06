/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars } from '@react-three/drei';
import './App.css';

import { Canvas } from '@react-three/fiber';
import Triangle from './components/Triangle';
// import Box from './components/Box';
// import Cone from './components/Cone';

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <OrbitControls />
        <Stars />
        <directionalLight color="white" position={[0, 0, 5]} />
        {/* <Box />
        <Cone /> */}
        <Triangle />
      </Canvas>
    </div>
  );
}
