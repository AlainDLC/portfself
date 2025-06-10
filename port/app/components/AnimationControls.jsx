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
      <div className="flex pointer-events-auto md:gap-5 gap-6  p-2 ">
        {availableAnimations.map((animName) => (
          <button
            key={animName}
            onClick={() => setAnimation(animName)}
            className={`
              py-2 rounded-md cursor-pointer text-base transition-colors shadow-md
              md:h-10 md:w-18 
              h-12 w-12
              ${
                animation === animName
                  ? "bg-gradient-to-r from-black via-black to-red-600 font-bold "
                  : "bg-red-600 font-normal  "
              }
              text-white border-none hover:text-red-100 text-sm text-center
            `}
          >
            {animName}
          </button>
        ))}
      </div>
    </div>
  );
};
