import Dev from "./Dev";
import { useState, useEffect, useRef } from "react";

export const Experience = () => {
  const [animation, setAnimation] = useState("Silly");

  /*
      animation: "Push" "Typing", "Salsa1" "Silly",
    
     */

  return (
    <group>
      <Dev position={[-1, -2, -2]} animation={animation} />
    </group>
  );
};
