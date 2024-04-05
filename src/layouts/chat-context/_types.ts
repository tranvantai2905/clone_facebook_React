import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";

export type ChatContextTyp = {
  selected_users: OnlineUserTyp[];
  maxUsers: number;
  addUser: (user: OnlineUserTyp) => boolean;
  removeUser: (user: OnlineUserTyp) => boolean;
};
