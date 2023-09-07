/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import styles from './Renderer.module.css';
import Triangle from '../Triangle';
import Cone from '../Cone';

export default function Renderer(pos) {
  const positions = pos.props.positions || [];

  return (
    <div className={styles.canvas__container}>
      <Canvas id="canvas">
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Stars />
        <directionalLight color="white" position={[0, 0, 5]} />
        {positions.length ? (
          positions.map((el, index) => {
            return <Triangle key={index} props={el} />;
          })
        ) : (
          <Cone />
        )}
      </Canvas>
    </div>
  );
}
