import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="bg-[url('/a.png')] bg-cover bg-center bg-no-repeat h-[45vh] flex flex-col p-6  px-33    ">
        <Image
          src="/jag.jpg"
          alt="Alain Profilbild"
          width={150}
          height={150}
          className="rounded-full  ml-10 mt-50 shadow-2xl   "
        />
      </div>
    </section>
  );
};

export default Hero;
