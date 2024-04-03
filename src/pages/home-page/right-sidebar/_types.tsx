export enum Status {
  Online = "Online",
  JustNow = "JustNow",
}
export type OnlineUser = {
  src: string;
  name: string;
  status: Status;
};

export type Page = {
  src: string;
  text: string;
};
