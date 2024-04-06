import { createContext, useContext } from "react";
import { ChatBoxContextTyp } from "./_types";

export const ChatBoxContext = createContext<ChatBoxContextTyp>({
  user: null,
  isLoading: false,
  messages: null,
  addMessage: () => {},
});

export const useChatBoxContext = () => useContext(ChatBoxContext);
