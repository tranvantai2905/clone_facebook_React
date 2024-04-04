import { ReactNode } from "react";
import { PostTyp, PagePostTyp } from "../_types";

export type HeaderStrategyTyp = {
  primary: (post: PostTyp) => ReactNode;
  page: (post: PagePostTyp) => ReactNode;
};
