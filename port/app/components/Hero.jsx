import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="text-left mb-20 ">
      <div className="bg-[url('/a.png')] bg-cover bg-center bg-no-repeat h-[40vh] flex flex-col p-5 ri  px-38 bg-slate-200  ">
        <Image
          src="/jag.jpg"
          alt="Alain Profilbild"
          width={120}
          height={120}
          className="rounded-full shadow-lg ml-10 mt-50 "
        />
      </div>

      <div className="ml-110 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold">Alain De La Cuadra</h1>
        <p className="text-lg text-gray-600 mt-2">
          Frontendutvecklare | React | UX-driven utveckling
        </p>
        <p className="text-sm text-gray-500 mt-4 max-w-xl">
          Jag bygger moderna, responsiva och användarvänliga webblösningar.
          Passionerad över teknik, samarbete och ständig utveckling.
        </p>
      </div>
    </section>
  );
};

export default Hero;
