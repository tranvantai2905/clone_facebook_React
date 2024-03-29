import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const PrimLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="underline">
      <nav className="h-14 w-full bg-slate-950"></nav>
      <div>{children}</div>
    </div>
  );
};

export default PrimLayout;
