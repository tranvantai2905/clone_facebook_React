import { Card } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import { OnlineUser } from "@/pages/home-page/right-sidebar/_types";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-message";
import ChatActions from "./chat-actions";
import { ChatBoxContext } from "./chat-context";
import { memo } from "react";

interface ChatBoxProps {
  user: OnlineUser;
}

const ChatBox = memo(({ user }: ChatBoxProps) => {
  // console.log(user);
  return (
    <ChatBoxContext.Provider value={{ user }}>
      <div className="">
        <Card className={"w-80 shadow-2xl"}>
          <ChatHeader />

          <Separator className="my-1" />

          <ChatMessages />

          <ChatActions />
        </Card>
      </div>
    </ChatBoxContext.Provider>
  );
});

export default ChatBox;
