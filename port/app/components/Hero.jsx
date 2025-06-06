import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="text-left mb-20 ">
      <div className="bg-[url('/a.png')] bg-cover bg-center bg-no-repeat h-[45vh] flex flex-col p-6  px-33   ">
        <Image
          src="/jag.jpg"
          alt="Alain Profilbild"
          width={150}
          height={150}
          className="rounded-full  ml-10 mt-50 shadow-2xl   "
        />
      </div>

      <div className="ml-110 mt-10 text-4xl font-bold bg-gradient-to-r from-red-600 via-black to-black bg-clip-text text-transparent">
        <h1 className="text-4xl md:text-5xl font-bold">Alain De La Cuadra</h1>
        <p className="text-lg  mt-2">
          Fullstack Developer Specializing in Frontend
        </p>
        <p className="text-sm  mt-4 max-w-xl">
          Jag designar och implementerar användarvänliga och responsiva
          gränssnitt som fascinerar och engagerar. Min entusiasm för frontend
          kompletteras av en bred förståelse för hela stacken, vilket gör att
          jag kan bygga robusta och skalbara webblösningar. Ständig utveckling
          och samarbete är kärnan i mitt arbete.
        </p>
      </div>
    </section>
  );
};

export default Hero;
