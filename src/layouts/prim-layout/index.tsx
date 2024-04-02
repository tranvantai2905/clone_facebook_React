import { FC, ReactNode } from "react";
import { MainNavigatorGroup, MenuGroup, SearchGroup } from "../components";

interface LayoutProps {
  children: ReactNode;
}

const PrimLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="w-ful fixed z-50 h-14 bg-slate-50">
        <SearchGroup />
        <MainNavigatorGroup />
        <MenuGroup />
      </nav>
      <div className="mt-14">{children}</div>
    </>
  );
};

export default PrimLayout;
