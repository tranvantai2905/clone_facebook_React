import { MessageTyp, WhoSend } from "./_types";
import Message from "./Message";

const renderMessages = (messages: MessageTyp[]) =>
  messages?.map((message) => {
    console.log(message);
    return message.type === WhoSend.Me
      ? Message.FromMessage({ message })
      : Message.ToMessage({ message });
  });
export { renderMessages };
