/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';
import Triangle from '../Triangle';

import styles from './Renderer.module.css';

export default function Renderer() {
  const H = 3;
  const r = 2;
  const N = 20;

  let positions = [];

  for (let i = 0; i < N; i++) {
    const position = [
      r * Math.cos((2 * Math.PI * i) / N),
      r * Math.sin((2 * Math.PI * i) / N),
      0,
      H,
      H,
      0,
      r * Math.cos((2 * Math.PI * (i + 1)) / N),
      r * Math.sin((2 * Math.PI * (i + 1)) / N),
      0
    ];
    positions.push(position);
  }

  return (
    <div className={styles.canvas__container}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <OrbitControls />
        <Stars />
        <directionalLight color="white" position={[0, 0, 5]} />
        {positions.map((el, index) => {
          return <Triangle key={index} props={el} />;
        })}
      </Canvas>
    </div>
  );
}
