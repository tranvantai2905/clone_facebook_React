import { FC, ReactNode } from "react";
import { MainNavigatorGroup, MenuGroup, SearchGroup } from "../components";
import ChatProvider from "../chat-context";
import ChatBoxRender from "../components/chat-bot-render";

interface LayoutProps {
  children: ReactNode;
}

const PrimLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ChatProvider>
        <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-between overflow-visible bg-slate-50">
          <SearchGroup />
          <MainNavigatorGroup />
          <MenuGroup />
        </nav>
        <div className="relative -mt-1">
          {children}

          <ChatBoxRender />
        </div>
      </ChatProvider>
    </>
  );
};

export default PrimLayout;
