import { usePosts } from "./_custom-hooks";
import { renderPosts } from "./_renders";
import { PostTyp } from "./_types";

const News = () => {
  const [posts] = usePosts() as [PostTyp[]];
  return <>{renderPosts(posts)}</>;
};

export default News;
