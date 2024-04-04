import { useMessages } from "./_custom-hook";
import { MessageTyp } from "./_types";
import { renderMessages } from "./_render";
import { useChatBoxContext } from "../chat-context";
import { useMemo } from "react";

const ChatMessages = () => {
  const { user } = useChatBoxContext();
  console.log(user);
  const [messages] = useMessages() as [MessageTyp[]];
  const messagesMemo = useMemo(() => messages, [messages]);
  return (
    <>
      <div className="grid h-80 gap-4 overflow-y-scroll p-2 pb-0 pt-5">
        {renderMessages(messagesMemo)}
      </div>
    </>
  );
};

export default ChatMessages;
