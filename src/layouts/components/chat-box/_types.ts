import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";
import { MessageTyp } from "./chat-message/_types";

export type ChatBoxContextTyp = {
  user: OnlineUserTyp | null;
  isLoading: boolean;
  messages: MessageTyp[] | null;
  addMessage: (message: MessageTyp) => void;
};
