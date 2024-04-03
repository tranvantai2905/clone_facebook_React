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
        <nav className="w-ful fixed z-50 h-14 bg-slate-50">
          <SearchGroup />
          <MainNavigatorGroup />
          <MenuGroup />
        </nav>
        <div className="mt-14">{children}</div>
        <ChatBoxRender />
      </ChatProvider>
    </>
  );
};

export default PrimLayout;
