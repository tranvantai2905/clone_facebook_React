import { createContext, ReactNode, FC, useState } from "react";
import { ChatContextTyp } from "./_types"; // Ensure consistent naming
import { OnlineUser } from "@/pages/home-page/right-sidebar/_types";

interface AppProviderProps {
  children: ReactNode;
}
export const ChatContext = createContext<ChatContextTyp>({
  selected_users: [],
  maxUsers: 3,
  addUser: () => true,
  removeUser: () => true,
});

const MAX_USERS = 3;

const ChatProvider: FC<AppProviderProps> = ({ children }) => {
  const [selected_users, setUsers] = useState<OnlineUser[]>([
    // {
    //   username: "Tran Van Tai",
    //   email: "",
    //   status: Status.Online,
    //   avatar_url: "",
    // },
  ]);
  const maxUsers = MAX_USERS;

  const addUser = (user: OnlineUser) => {
    if (user !== null) {
      if (
        selected_users.some(
          (existingUser) => existingUser.username === user.username,
        )
      ) {
        console.warn(`User "${user.username}" is already selected.`);
        return false;
      }

      if (selected_users.length === maxUsers) {
        setUsers((curr) => [user, ...curr.slice(1)]);
      } else {
        setUsers((curr) => [user, ...curr]);
      }
      return true;
    } else {
      return false;
    }
  };
  const removeUser = (user: OnlineUser) => {
    if (user !== null) {
      setUsers((curr) =>
        curr.filter((existingUser) => existingUser.username !== user.username),
      );
      return true;
    } else {
      return false;
    }
  };

  return (
    <ChatContext.Provider
      value={{ selected_users, maxUsers, addUser, removeUser }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
