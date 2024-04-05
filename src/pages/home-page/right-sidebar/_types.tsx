import { User } from "@/app-context/type";

export enum Status {
  Online = "Online",
  JustNow = "JustNow",
}
export type OnlineUserTyp = User & {
  status: Status;
};

export type Page = {
  src: string;
  text: string;
};
