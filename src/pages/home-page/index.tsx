import { playlists, Sidebar } from "../shared/sidebar";

const HomePage = () => {
  return (
    <>
      <div className="grid bg-slate-50 lg:grid-cols-5">
        <Sidebar
          playlists={playlists}
          className="sticky left-0 top-14 z-0 hidden h-full lg:block"
        />
        <div className="col-span-3 flex h-[5000px] justify-center">
          Main Content
        </div>
        <Sidebar playlists={playlists} className="hidden lg:block" />
      </div>
    </>
  );
};

export default HomePage;
