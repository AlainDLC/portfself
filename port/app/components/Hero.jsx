import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="text-left mb-20 ">
      <div className="bg-[url('/a.png')] bg-cover bg-center bg-no-repeat h-[45vh] flex flex-col p-6  px-33    ">
        <Image
          src="/jag.jpg"
          alt="Alain Profilbild"
          width={150}
          height={150}
          className="rounded-full h-20 w-20 ml-10  md:h-50 md:w-50 mt-70 shadow-2xl   "
        />
      </div>
    </section>
  );
};

export default Hero;
