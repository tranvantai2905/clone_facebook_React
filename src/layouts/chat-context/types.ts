export type SelectedUser = {
  name: string;
};
export type ChatContextTyp = {
  users: SelectedUser[];
  maxUsers: number;
  addUser: (user: SelectedUser) => boolean;
  removeUser: (user: SelectedUser) => boolean;
};
