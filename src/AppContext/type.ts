export type User = {
  username: string;
  password: string;
};
export type AppContextTyp = {
  user: User | null;
  loggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};
