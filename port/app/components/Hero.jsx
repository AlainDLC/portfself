import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="m-0 p-0">
      <div className="bg-[url('/a.png')] bg-cover bg-center bg-no-repeat h-32 flex flex-col lg:h-[45vh]  items-center    ">
        <Image
          src="/jag.jpg"
          alt="Alain Profilbild"
          width={150}
          height={150}
          className="rounded-full h-20 w-20  md:h-50 md:w-50  shadow-2xl   "
        />
      </div>
    </section>
  );
};

export default Hero;
