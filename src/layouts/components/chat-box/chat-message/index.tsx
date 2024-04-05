import { useMessages } from "./_custom-hook";
import { MessageTyp } from "./_types";
import { renderMessages } from "./_render";
import { useChatBoxContext } from "../chat-context";
import { useMemo } from "react";
import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";

interface ChatMessagesProps {
  user: OnlineUserTyp;
  messages: MessageTyp[];
}

const ChatMessages = ({ user, messages }: ChatMessagesProps) => {
  return (
    <div className="grid h-80 gap-4 overflow-y-scroll p-2 pb-0 pt-5">
      {renderMessages(messages)}
    </div>
  );
};

const ChatMessagesHOC = () => {
  const { user } = useChatBoxContext();
  const [messages] = useMessages() as [MessageTyp[]];

  const userMemo = useMemo(() => user, [user]);
  const messagesMemo = useMemo(() => messages, [messages]);

  return (
    <>
      <ChatMessages user={userMemo as OnlineUserTyp} messages={messagesMemo} />
    </>
  );
};

export default ChatMessagesHOC;
