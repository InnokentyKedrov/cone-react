/* eslint-disable react/no-unknown-property */
// import { DoubleSide } from 'three';

function Triangle(cone) {
  const positions = new Float32Array(cone.props);
  console.log('positions: ', positions);

  const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]);

  const colors = new Float32Array([0, 1, 1, 1, 1, 0, 1, 1, 1]);

  //   const indixes = new Uint16Array([0, 1, 3, 2, 3]);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={3} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-normal" array={normals} itemSize={3} />
        {/* <bufferAttribute attach="index" array={indixes} count={indixes.length} itemSize={1} /> */}
      </bufferGeometry>
      <meshStandardMaterial
        vertexColors
        //  side={DoubleSide}
      />
    </mesh>
  );
}

export default Triangle;
