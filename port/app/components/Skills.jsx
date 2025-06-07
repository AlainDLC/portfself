import { Skill } from "./Skill";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {skillsData.map((skill) => (
        <HoverCard key={skill.alt}>
          <HoverCardTrigger className="flex justify-center">
            <Skill source={skill.source} alt={skill.alt} title={skill.title} />
          </HoverCardTrigger>

          <HoverCardContent className="bg-white shadow-md" sideOffset={10}>
            <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-black  to-black  ">
              {skill.description}
            </span>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

const skillsData = [
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    alt: "React logo",
    description:
      "JavaScript-bibliotek för att bygga användargränssnitt, underhålls av Meta.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "Next.js logo",
    description:
      "React-ramverk utvecklat av Vercel – används för fullstack-utveckling och server-side rendering.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript logo",
    description:
      "Dynamiskt språk som används för att skapa interaktivitet i webbläsaren.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python logo",
    description: "Python används inom AI, dataanalys och webbutveckling.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    alt: "C# logo",
    description:
      "Objektorienterat språk utvecklat av Microsoft – ofta använt i .NET-applikationer.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    alt: "Java logo",
    description:
      "Plattformoberoende språk som används inom Android-utveckling och företagssystem.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    alt: "HTML5 logo",
    description:
      "Märkspråk som används för att strukturera innehåll på webbsidor.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    alt: "CSS3 logo",
    description: "Stilarksspråk för att designa utseendet på HTML-element.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS logo",
    description:
      "Utility-first CSS-ramverk som förenklar modern frontenddesign.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    alt: "GitHub logo",
    description:
      "Versionshanteringsplattform för samarbete och koddelning, baserat på Git.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    alt: "SQL logo",
    description:
      "Databasspråk för att skapa, hämta och hantera strukturerad data.",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "Node.js logo",
    description:
      "JavaScript-runtime för att bygga skalbara serverapplikationer.",
  },
];
