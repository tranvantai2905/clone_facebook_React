import { useEffect, useState } from "react";
import { PostTyp } from "./_types";
import { mock_posts } from "./_mock-data";

const usePosts = () => {
  const [posts, setPosts] = useState<PostTyp[] | null>(null);
  useEffect(() => {
    setPosts(mock_posts);
  }, []);
  return [posts, setPosts];
};
export { usePosts };
