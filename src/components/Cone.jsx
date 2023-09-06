/* eslint-disable react/no-unknown-property */

function Cone() {
  return (
    <mesh>
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
    </mesh>
  );
}

export default Cone;
