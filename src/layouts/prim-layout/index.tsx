import { FC, ReactNode } from "react";
import { MainNavigatorGroup, MenuGroup, SearchGroup } from "../components";

interface LayoutProps {
  children: ReactNode;
}

const PrimLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="w-ful z-10 h-14 bg-slate-50">
        <SearchGroup />
        <MainNavigatorGroup />
        <MenuGroup />
      </nav>
      <div className="z-0">{children}</div>
    </>
  );
};

export default PrimLayout;
