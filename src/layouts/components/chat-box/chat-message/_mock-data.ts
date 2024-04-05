import { MessageTyp, WhoSend } from "./_types";

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

export { mockMessages };
