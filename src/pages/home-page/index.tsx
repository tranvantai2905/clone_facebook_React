import { LeftSidebar } from "./left-sidebar";
import NewsWall from "./news-wall";
import { RightSideBar } from "./right-sidebar";

const HomePage = () => {
  return (
    <>
      <div className="grid bg-slate-50 lg:grid-cols-5">
        <LeftSidebar />
        <NewsWall />
        <RightSideBar />
      </div>
    </>
  );
};

export default HomePage;
