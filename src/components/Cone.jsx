/* eslint-disable react/no-unknown-property */

// ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
// radius — Radius of the cone base. Default is 1.
// height — Height of the cone. Default is 1.
// radialSegments — Number of segmented faces around the circumference of the cone. Default is 32
// heightSegments — Number of rows of faces along the height of the cone. Default is 1.
// openEnded — A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
// thetaStart — Start angle for first segment, default = 0 (three o'clock position).
// thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.

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
          Math.PI * 2 // central angle
        ]}
      />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Cone;
