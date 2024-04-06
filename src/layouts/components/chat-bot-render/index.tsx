import { ChatContext } from "@/layouts/chat-context";
import { ChatContextTyp } from "@/layouts/chat-context/_types";
import { renderChatBox } from "@/layouts/prim-layout/_render";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

const ChatBoxRender = () => {
  const { selected_users } = useContext(ChatContext) as ChatContextTyp;
  return (
    <div className="fixed bottom-1 right-0 mr-10 flex items-end justify-end gap-3">
      <AnimatePresence mode="popLayout">
        {renderChatBox(selected_users)}
      </AnimatePresence>
    </div>
  );
};

export default ChatBoxRender;
