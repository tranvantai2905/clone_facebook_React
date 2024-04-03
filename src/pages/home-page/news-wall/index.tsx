import Reels from "./reels";

const NewsWall = () => {
  return (
    <div className="col-span-5 flex justify-center md:col-start-2 lg:col-span-3">
      <div className="flex w-[715px] flex-col items-center bg-slate-200 px-8">
        <Reels />
      </div>
    </div>
  );
};

export default NewsWall;
