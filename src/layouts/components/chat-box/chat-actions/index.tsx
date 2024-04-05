import CustomInput from "@/components/custom/input";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { useState } from "react";
import ChatInputs from "./chat-inputs";
import { m } from "framer-motion";

const ChatActions = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    setTimeout(() => {
      alert("Sending: " + message);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-10 px-1 py-2">
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="plus" className="h-5 w-5" />}
      />
      <ChatInputs message={message} setMessage={setMessage} />
      {message === "" ? (
        <IconButton
          className="col-span-1"
          startIcon={<Icon name="thumbs-up" className="h-5 w-5" />}
          onClick={handleSend}
        />
      ) : (
        <IconButton
          className="col-span-1"
          startIcon={<Icon name="send-horizontal" className="h-5 w-5" />}
          onClick={handleSend}
        />
      )}
    </div>
  );
};

export default ChatActions;
