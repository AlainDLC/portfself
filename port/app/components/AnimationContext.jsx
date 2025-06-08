"use client";
import React, { createContext, useContext, useState } from "react";

// Skapar en "låda" för att dela information
const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animation, setAnimation] = useState("Redo"); // Standardanimation när appen startar
  return (
    <AnimationContext.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationState = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error(
      "useAnimationState must be used within an AnimationProvider"
    );
  }
  return context;
};
