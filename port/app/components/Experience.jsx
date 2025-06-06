import Dev from "./Dev";
import { useState, useEffect, useRef } from "react";

export const Experience = () => {
  const [animation, setAnimation] = useState("Silly");

  /*
      animation: "Push" "Typing", "Salsa1" "Silly",
    
     */

  return (
    <group scale={[4, 4, 4]}>
      <Dev position={[-1, -1, -2]} animation={animation} />
    </group>
  );
};
