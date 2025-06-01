import { Aiboxen } from "./components/Aiboxen";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <Hero />

      {/* 2. Projekt Section */}
      <section id="projects" className="px-6 bg-slate-100 h-full">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Mina Projekt
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          lägg i vedio github länk
        </div>
      </section>

      <section id="projects" className="px-6 bg-slate-100 h-full">
        <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">lägg i iconer</div>
      </section>

      {/* 3. Kontakt Section */}
      <section id="contact" className="bg-gray-100 px-6 py-16 text-center">
        <div className="flex gap-4 mt-6">
          <a
            href="mailto:frontend.alain.dlc@outlook.com"
            className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Kontakta mig
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition"
          >
            Ladda ner CV
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Aiboxen />
        </div>
      </section>
    </main>
  );
}
