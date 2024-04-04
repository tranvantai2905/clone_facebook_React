import { createContext, ReactNode, FC, useState, useMemo } from "react";
import { AppContextTyp, LoginUser, User } from "./type"; // Ensure consistent naming
import HttpService from "@/api";
interface AppProviderProps {
  children: ReactNode;
}
export const AppContext = createContext<AppContextTyp>({
  user: null,
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const loggedIn = useMemo(() => user !== null, [user]);
  const getUserInfo = (loginUser: LoginUser) => {
    return HttpService.getUserInfo(loginUser);
  };
  const login = (loginUser: LoginUser) => {
    if (user == null) {
      const userInfo = getUserInfo(loginUser);
      setUser(userInfo);

      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, loggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
