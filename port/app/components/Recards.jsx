import { Flip } from "./Flip";

const recommendations = [
  {
    name: "Sara Lindström",
    title: "Tech Lead, Grebban",
    description: "Alain är grym på React och har stor koll på frontend.",
    footer: "Rekommenderas starkt!",
    stars: 5,
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/sara" },
      { label: "GitHub", href: "https://github.com/sara" },
    ],
  },
  {
    name: "Jonas Templestein",
    title: "CTO, Monzo",
    description: "Levererar alltid på hög nivå och håller deadlines.",
    footer: "Bästa konsulten!",
    stars: 5,
    links: [
      { label: "Twitter", href: "https://twitter.com/jonas" },
      { label: "Github", href: "https://github.com/jonastemplestein" },
    ],
  },
  {
    name: "Fatima Noor",
    title: "Senior Dev, Fiwe",
    description: "Alain är snabb, smart och bra på AI-integrationer.",
    footer: "En tillgång för varje team.",
    stars: 10,
    links: [{ label: "LinkedIn", href: "https://linkedin.com/in/fatima" }],
  },
  {
    name: "Mikael Sundberg",
    title: "UX-designer, Freelance",
    description: "Bra på att förstå design och UX-flöden.",
    footer: "Jobbar gärna med honom igen!",
    stars: 5,
    links: [
      { label: "Behance", href: "https://behance.net/mikael" },
      { label: "Mail", href: "mailto:mikael@email.com" },
    ],
  },
];

export const Recards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 max-w-[650px] gap-8 ">
      {recommendations?.map((rec, index) => (
        <Flip key={index} {...rec} />
      ))}
    </div>
  );
};
