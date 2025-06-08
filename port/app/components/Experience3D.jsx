// components/Experience3D.jsx
"use client"; // Viktigt för Three.js/React-three-fiber i Next.js

import { Dev } from "./Dev"; // Importerar din befintliga Dev-komponent
import { useAnimationState } from "./AnimationContext"; // Använder informationen från AnimationContext

// Denna komponent renderar enbart din 3D-modell
export const Experience3D = () => {
  const { animation } = useAnimationState(); // Får reda på vilken animation som ska spelas

  return (
    <group scale={[3, 3, 3]}>
      <Dev position={[-1, -1, -1]} animation={animation} />
    </group>
  );
};
