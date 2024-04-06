import { User } from "@/app-context/type";
import { PageTyp } from "@/pages/shared/types";

export type PostTyp = {
  post_user: User;
  date_post: Date;
  content: string;
  interact_users: InteractUserTyp[];
  page?: PageTyp;
};

export type PagePostTyp = PostTyp & {
  page?: PageTyp;
};
export type InteractUserTyp = {
  user: User;
  interact: InteractTyp;
};
export enum InteractTyp {
  Like = "Like",
  Love = "Love",
  Care = "Care",
  HaHa = "HaHa",
  Wow = "Wow",
  Sad = "Sad",
  Angry = "Angry",
}
