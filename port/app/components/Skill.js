export const Skill = ({ source, alt, title }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center p-2
        transition-all duration-300 ease-in-out
        hover:bg-slate-50  hover:shadow-md  hover:scale-105 rounded-xl
      "
    >
      <img src={source} alt={alt} className="h-16 w-16 mb-2" />
      <p className="text-center text-gray-700 font-semibold">{title}</p>
    </div>
  );
};
