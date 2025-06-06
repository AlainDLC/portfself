import { Aiboxen } from "./components/Aiboxen";
import Hero from "./components/Hero";
import {
  BashDark,
  CSS,
  DotNet,
  Git,
  GithubDark,
  HTML,
  JavaDark,
  JavaScript,
  Jest,
  MongoDB,
  NextJSDark,
  Postman,
  ReactDark,
  Redux,
  SupabaseDark,
  VercelDark,
  VSCodeDark,
} from "@fdorantesm/react-skill-icons";

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

      <section
        id="projects"
        class="px-6 py-16 bg-gradient-to-br from-slate-100 to-white min-h-screen flex flex-col items-center justify-center"
      >
        <h2 class="text-4xl font-extrabold mb-12 text-center text-gray-800 tracking-tight">
          My Skills
        </h2>
        <div class="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <GithubDark class="h-10 w-10 text-gray-700" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <JavaScript class="h-10 w-10 text-yellow-500" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <ReactDark class="h-10 w-10 text-blue-500" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <NextJSDark class="h-10 w-10 text-gray-800" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <BashDark class="h-10 w-10 text-green-600" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <CSS class="h-10 w-10 text-blue-600" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <DotNet class="h-10 w-10 text-purple-700" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Git class="h-10 w-10 text-orange-600" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <HTML class="h-10 w-10 text-red-500" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <JavaDark class="h-10 w-10 text-red-700" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Jest class="h-10 w-10 text-red-600" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <MongoDB class="h-10 w-10 text-green-700" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Postman class="h-10 w-10 text-orange-400" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Redux class="h-10 w-10 text-purple-600" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <SupabaseDark class="h-10 w-10 text-green-500" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <VSCodeDark class="h-10 w-10 text-blue-400" />
          </div>
          <div class="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <VercelDark class="h-10 w-10 text-black" />
          </div>
        </div>
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
