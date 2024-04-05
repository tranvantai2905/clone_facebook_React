import { Card } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-message";
import ChatActions from "./chat-actions";
import { ChatBoxContext } from "./chat-context";

import { LazyMotion, domAnimation, m } from "framer-motion";

import { memo } from "react";
interface ChatBoxProps {
  user: OnlineUserTyp;
  key: string;
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 200,
};

const ChatBox = ({ user, key }: ChatBoxProps) => {
  return (
    <ChatBoxContext.Provider value={{ user }}>
      <LazyMotion features={domAnimation}>
        <m.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: -18,
            y: 0,
            rotate: 0,
          }}
          exit={{ x: 18, opacity: 0 }}
          // whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.9 }}
          transition={spring}
        >
          <Card className={"w-80 shadow-2xl"}>
            <ChatHeader />

            <Separator className="my-1" />

            <ChatMessages />

            <ChatActions />
          </Card>
        </m.div>
      </LazyMotion>
    </ChatBoxContext.Provider>
  );
};

export default memo(ChatBox);
