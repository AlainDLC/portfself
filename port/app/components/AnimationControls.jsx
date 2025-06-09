// components/AnimationControls.jsx
"use client";

import { useAnimationState } from "./AnimationContext";

export const AnimationControls = () => {
  const { animation, setAnimation } = useAnimationState();
  const availableAnimations = [
    "Redo",
    "Kodar",
    "Tränar",
    "Bachata",
    "Salsa",
    "Helg",
  ];

  return (
    // Denna div är nu en flex-container (inte absolut positionerad här längre)
    // Den innehåller knapparna och kan ges marginaler i sin förälder (page.js)
    <div
      className="flex items-start " // Använder flexbox för att organisera innehållet internt, om du skulle lägga till mer här.
      // "items-start" justerar knapprutan uppåt om det finns mer innehåll.
      // `pointer-events-none` tas BORT här för att knapparna ska vara klickbara som standard
    >
      <div className="flex pointer-events-auto gap-4   p-4 ">
        {availableAnimations.map((animName) => (
          <button
            key={animName}
            onClick={() => setAnimation(animName)}
            className={`
              px-4 py-2 rounded-md cursor-pointer text-base transition-colors shadow-md
              ${
                animation === animName
                  ? "bg-gradient-to-r from-black via-black to-red-600 font-bold "
                  : "bg-red-600 font-normal  "
              }
              text-white border-none hover:text-red-100
            `}
          >
            {animName}
          </button>
        ))}
      </div>
    </div>
  );
};
