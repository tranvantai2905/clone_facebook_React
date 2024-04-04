export type User = {
  email: string;
  avatar_url?: string;
  username: string;
  url?: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type AppContextTyp = {
  user: User | null;
  loggedIn: boolean;
  login: (user: LoginUser) => void;
  logout: () => void;
};
