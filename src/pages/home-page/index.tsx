import { playlists, Sidebar } from "../shared/sidebar";
import { LeftSidebar } from "./left-sidebar";

const HomePage = () => {
  return (
    <>
      <div className="grid bg-slate-50 lg:grid-cols-5">
        <LeftSidebar className="sticky top-14 hidden w-[340px] self-start ease-in-out lg:block" />
        <div className="col-span-3 col-start-2 flex justify-center">
          <div className="h-[3000px] w-full bg-red-600">Content</div>
        </div>
        <Sidebar
          playlists={playlists}
          className="sticky top-10 hidden w-[340px] self-start duration-1000 ease-in-out lg:block"
        />
      </div>
    </>
  );
};

export default HomePage;
