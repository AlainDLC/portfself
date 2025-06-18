import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="bg-[url('/a.png')] bg-cover bg-center bg-no-repeat h-32 flex flex-col lg:h-[45vh]  items-center    ">
        <Image
          src="/jag.jpg"
          alt="Alain Profilbild"
          width={150}
          height={150}
          className="rounded-full h-10 w-10  md:h-40 md:w-40  mt-18 mr-55 xl: lg:mt-80 lg:mr-[1200px] md:ml-[150px]  md:mt-36  "
        />
      </div>
    </section>
  );
};

export default Hero;
