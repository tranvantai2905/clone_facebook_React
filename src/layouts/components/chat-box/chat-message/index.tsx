import { useMessages } from "./_custom-hook";
import { MessageTyp } from "./_types";
import { renderMessages } from "./_render";
import { useChatBoxContext } from "../chat-context";

const ChatMessages = () => {
  const { user } = useChatBoxContext();
  console.log(user);
  const [messages] = useMessages() as [MessageTyp[]];
  return (
    <>
      {user && (
        <div className="grid h-80 gap-4 overflow-y-scroll p-2 pb-0 pt-5">
          {renderMessages(messages)}
        </div>
      )}
    </>
  );
};

export default ChatMessages;
