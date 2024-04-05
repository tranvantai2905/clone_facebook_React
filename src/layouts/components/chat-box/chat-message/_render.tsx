import { MessageTyp, WhoSend } from "./_types";
import Message from "./Message";

const renderMessages = (messages: MessageTyp[]) =>
  messages?.map((message, idx) => {
    return message.type === WhoSend.Me
      ? Message.FromMessage({ message, idx })
      : Message.ToMessage({ message, idx });
  });
export { renderMessages };
