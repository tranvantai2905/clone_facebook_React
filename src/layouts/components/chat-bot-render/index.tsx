import { ChatContext } from "@/layouts/chat-context";
import { ChatContextTyp } from "@/layouts/chat-context/_types";
import { renderChatBox } from "@/layouts/prim-layout/_render";
import { useContext } from "react";

const ChatBoxRender = () => {
  const { selected_users } = useContext(ChatContext) as ChatContextTyp;
  return (
    <div className="sticky bottom-0 mr-16 flex justify-end gap-5">
      {renderChatBox(selected_users)}
    </div>
  );
};

export default ChatBoxRender;
