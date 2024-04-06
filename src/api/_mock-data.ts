import { User } from "@/app-context/type";
import {
  MessageTyp,
  WhoSend,
} from "@/layouts/components/chat-box/chat-message/_types";

const mockUserInfo: User = {
  email: "taiho58@gmail.com",
  username: "Tài Trần",
  avatar_url: "",
  url: "",
};

const mockMessages: MessageTyp[] = [
  {
    type: WhoSend.Me,
    message: "I love u <3",
    date: new Date("April 03, 2024 11:13:00"),
  },
  {
    type: WhoSend.Me,
    message: "I love u <3",
    date: new Date("April 03, 2024 11:13:00"),
  },
  {
    type: WhoSend.Sender,
    message: "I love u <3",
    date: new Date(),
  },
  {
    type: WhoSend.Sender,
    message: "I love u <3",
    date: new Date(),
  },
  {
    type: WhoSend.Sender,
    message: "I love u <3",
    date: new Date(),
  },
  {
    type: WhoSend.Sender,
    message: "I love u <3",
    date: new Date(),
  },
];

export { mockUserInfo, mockMessages };
