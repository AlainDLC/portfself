"use client";
import { Aiboxen } from "./components/Aiboxen";
import Hero from "./components/Hero";

import { Canvas } from "@react-three/fiber";

import { Skills } from "./components/Skills";
import { Flip } from "./components/Flip";
import { Recards } from "./components/Recards";
import { AnimationProvider } from "./components/AnimationContext";
import { Experience3D } from "./components/Experience3D";
import { AnimationControls } from "./components/AnimationControls";
import { Projects } from "./components/Projects";
import { Copyright, MailIcon, User2Icon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col   gap-30 bg-gradient-to-br from-slate-100 to-white ">
      <Hero />
      <div className="text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-center w-fit mx-auto -mt-32">
        <h1 className="text-4xl md:text-5xl font-bold">Alain De La Cuadra</h1>
        <p className="text-lg mt-2">
          Fullstack Developer Specializing in Frontend
        </p>
        <p className="text-sm mt-4 max-w-xl">
          Designar och implementerar användarvänliga och responsiva gränssnitt
          som fascinerar och engagerar. Min entusiasm för frontend kompletteras
          av en bred förståelse för hela stacken, vilket gör att jag kan bygga
          robusta och skalbara webblösningar. Ständig utveckling och samarbete
          är kärnan i mitt arbete.
        </p>
      </div>

      {/* 2. Projekt Section */}
      <section
        id="projects"
        className="bg-gradient-to-br from-slate-100 to-white min-h-screen flex flex-col items-center py-12 px-4"
      >
        <h2 className=" py-6 text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-center w-fit mx-auto">
          CLONA OCH KÖR PÅ!
        </h2>
        <p className="text-sm text-slate-500 max-w-3xl text-center leading-relaxed  ">
          Pusselbitar och Programvara
        </p>
        <div className="mt-10">
          <Projects />
        </div>
      </section>
      <AnimationProvider>
        <section
          id="teck"
          className="bg-gradient-to-br from-slate-100 to-white min-h-screen flex flex-col items-center py-12 px-4"
        >
          <h2 className=" mb-8 text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-center">
            TECH STACK
          </h2>

          <p className="max-w-4xl  text-sm text-slate-500  text-center leading-relaxed">
            Här presenteras min expertis inom teknikstacken jag behärskar.
            <br />
            Jag är flexibel och lär mig snabbt nya verktyg och tekniker för att
            möta just era behov.
            <br />
            Hovra gärna över varje skill för att se en kort beskrivning.
            <br />
            Prova även knapparna — min personliga avatar är en lekfull spegling
            av mig själv.
          </p>

          <div className="py-6 flex flex-col md:flex-row items-center   ">
            <div className="flex flex-col justify-center items-center ">
              <Skills />
              <AnimationControls />
            </div>

            <div className="w-72 h-72 md:w-96 md:h-96 ml-0 md:ml-32">
              <Canvas className="ml-20 md:ml-32">
                <ambientLight intensity={3} />
                <Experience3D />
              </Canvas>
            </div>
          </div>
        </section>
      </AnimationProvider>
      <section
        id="recommends"
        className="bg-gradient-to-br from-slate-100 to-white min-h-screen flex flex-col items-center py-12 px-4"
      >
        <h2 className=" py-6 text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-center w-fit mx-auto">
          Rekommendationer
        </h2>
        <div className="py-2 flex  gap-6 flex-col md:flex-row items-start">
          <Recards />
          <p className="max-w-4xl md:text-xl bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-left  order-last text-md">
            Tillsammans tar vi fram din affärsidé och bygger smarta,
            skräddarsydda tekniska lösningar som speglar din vision och
            affärsmodell.
            <br />
            Jag erbjuder expertis inom Learning Management Systems (LMS) för att
            säkerställa effektiv onboarding och kontinuerlig utbildning – både
            internt och för dina kunder. Genom digitala plattformar skapar vi
            strukturerad, engagerande och mätbar kompetensutveckling.
            <br />
            Med avancerad AI-teknik, inklusive Retrieval-Augmented Generation
            (RAG) och prompt coaching, hjälper jag dig att maximera värdet av
            din data och fatta mer insiktsdrivna beslut. Vi gör din information
            sökbar, skalbar och användbar – i realtid.
            <br />
            Jag utvecklar även anpassade chatbotar och AI-agenter som förbättrar
            kundupplevelsen, automatiserar support och skapar starkare
            relationer genom varje interaktion. Dessa agenter integreras sömlöst
            med dina system och lär sig kontinuerligt för att ge ännu bättre
            svar.
          </p>
        </div>
      </section>

      {/* 3. Kontakt Section */}
      <section
        id="contact"
        className="bg-gradient-to-br from-slate-100 to-white  px-6 py-16 text-center"
      >
        <div className="flex gap-4 mt-6 ">
          <a
            href="mailto:frontend.alain.dlc@outlook.com"
            className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition "
          >
            <div className="group-hover:animate-bounce  ">
              <MailIcon />
            </div>
          </a>

          <div className="flex gap-4 mt-6 group"></div>
          <a
            href="https://www.linkedin.com/in/alain-de-la-cuadra/"
            className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            <div className="group-hover:animate-bounce   ">
              <User2Icon />
            </div>
          </a>
          <div className="flex-1  items-center mt-3">
            <p className="flex items-center justify-center gap-x-2 text-center font-bold ">
              <Copyright className="h-4 w-4 text-red-600 " /> 2025 Alain De La
              Cuadra
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          <Aiboxen />
        </div>
      </section>
    </main>
  );
}
