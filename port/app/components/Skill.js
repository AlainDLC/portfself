export const Skill = ({ source, alt, title }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center py-4 mt-2
        transition-all duration-300 ease-in-out
          rounded-xl   hover:scale-105
      "
    >
      <img
        src={source}
        alt={alt}
        className=" lg:h-28 lg:w-20 md:h-28 md:w-20 h-18 w-12 p-2 cursor-pointer  mr-10"
      />
      <p className="text-center text-black font-semibold">{title}</p>
    </div>
  );
};
