import { ChatContext } from "@/layouts/chat-context";
import { ChatContextTyp } from "@/layouts/chat-context/types";
import { renderChatBox } from "@/layouts/prim-layout/_render";
import { useContext } from "react";

const ChatBoxRender = () => {
  const { users } = useContext(ChatContext) as ChatContextTyp;
  return <>{renderChatBox(users)}</>;
};

export default ChatBoxRender;
