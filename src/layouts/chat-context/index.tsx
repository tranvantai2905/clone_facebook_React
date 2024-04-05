import { createContext, ReactNode, FC, useState } from "react";
import { ChatContextTyp } from "./_types"; // Ensure consistent naming
import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";

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
  const [selected_users, setUsers] = useState<OnlineUserTyp[]>([]);
  const maxUsers = MAX_USERS;

  const addUser = (user: OnlineUserTyp) => {
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
        setUsers((curr) => [...curr.slice(1), user]);
      } else {
        setUsers((curr) => [...curr, user]);
      }
      return true;
    } else {
      return false;
    }
  };
  const removeUser = (user: OnlineUserTyp) => {
    console.log("ChatContext", user, selected_users);
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
