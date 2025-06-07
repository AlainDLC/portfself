import Dev from "./Dev";
import { useState, useEffect, useRef } from "react";

export const Experience = () => {
  const [animation, setAnimation] = useState("Silly");

  /*
      animation: "Push" "Typing", "Salsa1" "Silly",
    
     */

  return (
    <group scale={[3, 3, 3]}>
      <Dev position={[-1, -1, -1]} animation={animation} />
    </group>
  );
};
