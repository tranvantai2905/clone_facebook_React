import { LeftSidebar } from "./left-sidebar";
import { RightSideBar } from "./right-sidebar";

const HomePage = () => {
  return (
    <>
      <div className="grid bg-slate-50 lg:grid-cols-5">
        <LeftSidebar />
        <div className="col-span-5 flex justify-center md:col-span-3 md:col-start-2">
          <div className="h-[3000px] w-full bg-red-600">Content</div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default HomePage;
