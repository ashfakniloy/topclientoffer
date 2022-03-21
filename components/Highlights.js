import { highlightList } from "../data/hightlist";

function Highlights() {
  return (
    <div className="px-2 py-8 lg:py-24 ">
      <h1 className="text-custom-red text-center text-[53px] lg:text-[61px] font-bold uppercase">
        Highlights
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        {highlightList.map((highlight) => (
          <div
            key={highlight.id}
            className="relative flex flex-col justify-center items-center w-full h-[265px] md:w-[450px]"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="text-5xl">{highlight.icon}</div>
              <p className="mt-6 text-[24px] lg:text-[35px] font-semibold">
                {highlight.name}
              </p>
            </div>

            <div className="absolute transition-all duration-700 opacity-0 hover:opacity-100 p-14 bg-gradient-to-tr from-black via-custom-red  to-black">
              <p className="flex flex-col justify-center items-center h-[150px] text-[13px] text-center font-medium">
                {highlight.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
