import { Html } from "@react-three/drei";
import Dev from "./Dev";
import { useState, useEffect, useRef } from "react";

export const Experience = () => {
  const [animation, setAnimation] = useState("Typing");
  const [section, setSection] = useState(0);
  const videoRef = useRef(null);

  const sections = [
    {
      animation: "Typing",
      title: "Alain De La Cuadra",
      text: "",
    },
    /*,
    {
      animation: "Push",
      title: "Just puch your self",
      text: "",
    },
    {
      animation: "Salsa1",
      title: "Bachata time",
      text: "",
    },

    {
      animation: "Silly",
      title: "Contact Me",
      text: "Let's connect!",
    }, */
  ];

  return (
    <group scale={[6, 6, 6]}>
      <Dev position={[-2, -2, -2]} animation={animation} />
    </group>
  );
};
