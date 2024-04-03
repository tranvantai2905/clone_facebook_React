import { PostTyp } from "./_types";
import Post from "./post";

const renderPosts = (posts: PostTyp[]) =>
  posts?.map((post) => <Post post={post} />);

export { renderPosts };
