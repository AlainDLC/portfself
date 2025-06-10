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
        className=" lg:h-28 lg:w-24 md:h-28 md:w-15 h-25 w-28 p-2 lg:p-2 cursor-pointer  "
      />
      <p className="text-center text-black font-semibold">{title}</p>
    </div>
  );
};
