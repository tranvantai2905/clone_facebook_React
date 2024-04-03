import { createContext, ReactNode, FC, useState, useMemo } from "react";
import { AppContextTyp, User } from "./type"; // Ensure consistent naming

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

  const login = (userI: User) => {
    if (user == null) {
      setUser(userI);

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
