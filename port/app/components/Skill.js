export const Skill = ({ source, alt, title }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center py-4 mt-2
        transition-all duration-300 ease-in-out
        hover:bg-slate-100  hover:shadow-md   rounded-xl  
      "
    >
      <img src={source} alt={alt} className="h-18 w-20  cursor-pointer" />
      <p className="text-center text-black font-semibold">{title}</p>
    </div>
  );
};
