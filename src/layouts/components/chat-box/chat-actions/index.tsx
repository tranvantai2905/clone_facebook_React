import CustomInput from "@/components/custom/input";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { useRef, useState } from "react";
import ChatInputs from "./chat-inputs";

const ChatActions = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [hadMessage, setHadMessage] = useState<boolean>();
  console.log(inputRef.current?.value, "ChatActions re-render");
  const handleSend = () => {
    setTimeout(() => {
      alert("Sending: " + inputRef.current?.value);
      console.log(inputRef.current?.value, inputRef.current?.value === "");
    }, 1000);
  };

  return (
    <div className="grid grid-cols-10 px-1 py-2">
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
          onClick={handleSend}
        />
      )}
    </div>
  );
};

export default ChatActions;
