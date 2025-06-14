import { Flip } from "./Flip";

const recommendations = [
  {
    name: "Martin Ekberg",
    title: "Systemutvecklare Yoin",
    description:
      "Alain har ett stort tekniskt intresse och vill alltid utvecklas. Hans förmåga att hålla stämningen på topp gör varje arbetsdag rolig och produktiv.",
    footer: "Rekommenderar varmt!",
    stars: 5,
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/martin-ekberg-089636a9/",
      },
    ],
  },
  {
    name: "Daiver y Andrea",
    title: "Grundare Dance by Daiver y Andrea",
    description:
      "Alains LMS-lösning har förändrat mitt sätt att undervisa online. Jag kan enkelt ladda upp klasser och följa elevernas utveckling smidigt. #LMS",
    footer: "Magisk plattform!",
    stars: 5,
    links: [{ label: "Dancebyda", href: "https://www.dancebyda.com/" }],
  },
  {
    name: "Hanna Sköld ",
    title: "Systemutvecklare Volvo Finans",
    description:
      "Alain och jag arbetade i samma team och han bidrog alltid med en positiv stämning i gruppen. Han har stor kunskap särskilt i React.",
    footer: "Professionell och engagerad!",
    stars: 5,
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hannaskold/",
      },
    ],
  },

  {
    name: "Mikael Ishhanian",
    title: "UX-designer, Freelance",
    description:
      "Alain förstår design och UX-flöden på djupet. Han levererar alltid lösningar som är både snygga och användarvänliga för slutkunden. #Freelance",
    footer: "Jobbar gärna med honom igen!",
    stars: 5,
    links: [{ label: "Behance", href: "https://behance.net/mikael" }],
  },
];
export const Recards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 text-sm md:text-md">
      {recommendations?.map((rec, index) => (
        <Flip key={index} {...rec} />
      ))}
    </div>
  );
};
