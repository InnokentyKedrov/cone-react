/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars } from '@react-three/drei';
import './App.css';

import { Canvas } from '@react-three/fiber';
import Triangle from './components/Triangle';
// import Box from './components/Box';
// import Cone from './components/Cone';

export default function App() {
  const H = 3;
  const positions1 = new Float32Array([-2, -H, 0, 0, H, 0, -4, -H + 1, 0]);
  const positions2 = new Float32Array([-4, -H + 1, 0, 0, H, 0, -6, 0, 0]);

  const props1 = { H: 3, position: positions1 };
  const props2 = { H: 3, position: positions2 };

  const positions = [positions1, positions2];

  // let cone = { height: 3, radius: 2 };

  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <OrbitControls />
        <Stars />
        <directionalLight color="white" position={[0, 0, 5]} />
        {/* <Box /> */}
        {/* <Cone /> */}
        {positions.map((el, index) => {
          return <Triangle key={index} props={el} />;
        })}
        <Triangle props={props1} />
        <Triangle props={props2} />
      </Canvas>
    </div>
  );
}
