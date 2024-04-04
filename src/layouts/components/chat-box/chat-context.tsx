import { createContext, useContext } from "react";
import { ChatBoxContextTyp } from "./_types";

export const ChatBoxContext = createContext<ChatBoxContextTyp>({ user: null });

export const useChatBoxContext = () => useContext(ChatBoxContext);
