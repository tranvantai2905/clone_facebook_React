import { IconButton } from "@/pages/shared/component/icon-button";
import Icon from "@/pages/shared/component/icon";
import { useRef, useState } from "react";
import ChatInputs from "./chat-inputs";
import { useChatBoxContext } from "../chat-context";
import { MessageTyp, WhoSend } from "../chat-message/_types";

const ChatActions = () => {
  const { addMessage } = useChatBoxContext();
  const [hadMessage, setHadMessage] = useState<boolean>();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  console.log(inputRef.current?.value, "ChatActions re-render");

  const handleSend = () => {
    const curr_message: MessageTyp = {
      type: WhoSend.Me,
      message: inputRef.current?.value as string,
      date: new Date(),
    };
    addMessage(curr_message);
    setTimeout(() => {
      console.log(inputRef.current?.value, inputRef.current?.value === "");
    }, 1000);
  };

  return (
    <div className="grid grid-cols-10 items-end px-1 py-2">
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="plus" className="h-5 w-5" />}
      />
      <ChatInputs ref={inputRef} setHadMessage={setHadMessage} />
      {hadMessage ? (
        <IconButton
          className="col-span-1"
          startIcon={<Icon name="send-horizontal" className="h-5 w-5" />}
          onClick={() => handleSend()}
        />
      ) : (
        <IconButton
          className="col-span-1"
          startIcon={<Icon name="thumbs-up" className="h-5 w-5" />}
          onClick={() => handleSend()}
        />
      )}
    </div>
  );
};

export default ChatActions;
