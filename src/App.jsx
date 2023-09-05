/* eslint-disable react/no-unknown-property */
import './App.css';

import { Canvas } from '@react-three/fiber';
// import Box from './components/Box'

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxBufferGeometry attach="geometry" />
          <meshStandardMaterial attach="material" color="pink" />
        </mesh>
        {/* <mesh>
          <coneGeometry
            args={[
              2, // radius
              10, // height
              32, //radial segments,
              1, // height segments
              false, // open ended or capped, false means capped
              0, // start angle
              Math.PI * 2
            ]}
          />
          <meshStandardMaterial />
        </mesh> */}
      </Canvas>
    </div>
  );
}
