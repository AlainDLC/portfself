import Dev from "./Dev";
import { useState, useEffect, useRef } from "react";

export const Experience2 = () => {
  const [animation, setAnimation] = useState("Salsa1");

  /*
      animation: "Push" "Typing", "Salsa1" "Silly",
    
     */

  return (
    <group rotation={[0, 0, 0]}>
      <Dev position={[-1, -1, -1]} animation={animation} />
    </group>
  );
};
