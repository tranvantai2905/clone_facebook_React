import { createContext, ReactNode, FC, useState } from "react";
import { ChatContextTyp, SelectedUser } from "./types"; // Ensure consistent naming

interface AppProviderProps {
  children: ReactNode;
}
export const ChatContext = createContext<ChatContextTyp>({
  users: [],
  maxUsers: 3,
  addUser: () => true,
  removeUser: () => true,
});

const MAXUSERS = 3;

const ChatProvider: FC<AppProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<SelectedUser[]>([
    { name: "Tran Van Tai" },
  ]);
  const maxUsers = MAXUSERS;
  const addUser = (user: SelectedUser) => {
    if (user !== null) {
      if (maxUsers == users.length) {
        setUsers((curr) => {
          curr = curr.slice(1);
          curr.push(user);
          return curr;
        });
      }
      return true;
    } else {
      return false;
    }
  };
  const removeUser = (user: SelectedUser) => {
    if (user !== null) {
      if (maxUsers == users.length) {
        setUsers((curr) => {
          curr = curr.filter((iUser) => user.name !== iUser.name);
          return curr;
        });
      }
      return true;
    } else {
      return false;
    }
  };

  return (
    <ChatContext.Provider value={{ users, maxUsers, addUser, removeUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
