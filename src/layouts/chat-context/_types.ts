import { OnlineUser } from "@/pages/home-page/right-sidebar/_types";

export type ChatContextTyp = {
  selected_users: OnlineUser[];
  maxUsers: number;
  addUser: (user: OnlineUser) => boolean;
  removeUser: (user: OnlineUser) => boolean;
};
