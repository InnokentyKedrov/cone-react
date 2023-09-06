/* eslint-disable react/no-unknown-property */

function Cone() {
  return (
    <mesh>
      <coneGeometry
        args={[
          1, // radius
          4, // height
          10, //radial segments,
          1, // height segments
          false, // open ended or capped, false means capped
          0, // start angle
          Math.PI * 2
        ]}
      />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Cone;
