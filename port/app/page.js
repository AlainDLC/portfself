"use client";
import { Aiboxen } from "./components/Aiboxen";
import Hero from "./components/Hero";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Flip } from "./components/Flip";
import { Recards } from "./components/Recards";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <Hero />

      {/* 2. Projekt Section */}
      <section id="projects" className=" bg-slate-100 h-full">
        <h2 className=" py-6 text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-center w-fit mx-auto">
          Mina Projekt
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          lägg i vedio github länk
        </div>
      </section>

      <section
        id="teck"
        className=" bg-gradient-to-br from-slate-100 to-white min-h-screen flex flex-col items-center py-6"
      >
        <h2 className=" mb-30 text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-center w-fit mx-auto">
          TECH STACK
        </h2>
        <div className="flex items-center max-w-6xl w-full px-6 ">
          <div className="flex-1 flex flex-col justify-center items-center ">
            <Skills />
          </div>

          {/* Bilddelen */}
          <div className="w-96 h-96">
            <Canvas className="ml-32">
              <ambientLight intensity={3} />
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      <section id="recommends" className="px-6 bg-slate-100 h-full">
        <h2 className=" py-6 text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent text-center w-fit mx-auto">
          Recomendationer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Recards />
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
