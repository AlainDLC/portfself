import { Aiboxen } from "./components/Aiboxen";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      {/* 1. Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6"
      >
        <h1 className="text-5xl font-bold">Hej, jag är Alain</h1>
        <p className="text-xl mt-4 text-gray-600">
          Frontendutvecklare med passion för React & design
        </p>
      </section>

      {/* 2. Projekt Section */}
      <section id="projects" className="px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Mina Projekt
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Aiboxen />
        </div>
      </section>

      {/* 3. Kontakt Section */}
      <section id="contact" className="bg-gray-100 px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Kontakta mig</h2>
        <p className="mb-6">Du kan nå mig via e-post eller LinkedIn!</p>
        <a
          href="mailto:alain@example.com"
          className="text-red-600 hover:underline"
        >
          alain@example.com
        </a>
      </section>
    </div>
  );
}
