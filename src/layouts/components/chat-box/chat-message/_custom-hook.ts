import { useEffect, useState } from "react";
import { MessageTyp } from "./_types";
import { mockMessages } from "./_mock-data";

const useMessages = () => {
  const [messages, setMessages] = useState<MessageTyp[] | null>(null);
  useEffect(() => {
    setMessages(mockMessages);
  }, []);
  return [messages, setMessages];
};
export { useMessages };
