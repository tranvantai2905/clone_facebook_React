import Avatar from "@/components/custom/avatar";
import { PagePostTyp, PostTyp } from "../_types";
import { Link } from "react-router-dom";
import { timeSince } from "@/utils";
import Icon from "@/shared/icon";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import { Button } from "@/components/ui/button";
import { HeaderStrategyTyp } from "./_types";

const headerStrategy: HeaderStrategyTyp = {
  primary: (post: PostTyp) => (
    <div className="flex flex-col gap-1">
      <Link to="">
        <p className="text-sm font-bold">{post.post_user.username}</p>
      </Link>
      <div className="flex items-center gap-2 text-xs">
        <Link to="">{timeSince(post.date_post)}</Link>
        ·
        <Icon name="users-round" className="h-3 w-3" />
      </div>
    </div>
  ),
  page: (post: PagePostTyp) => (
    <div className="flex flex-col gap-1">
      <Link to="">
        <p className="text-sm font-bold">{post.page?.page_name}</p>
      </Link>
      <div className="flex items-center gap-2 text-xs">
        <Link to="">
          <p>{post.post_user.username}</p>
        </Link>
        ·<Link to="">{timeSince(post.date_post)}</Link>
        ·
        <Icon name="users-round" className="h-3 w-3" />
      </div>
    </div>
  ),
};
function isPagePostTyp(post: PostTyp | PagePostTyp): post is PagePostTyp {
  return typeof post.page !== "undefined"; // Check for existence of the 'page' property
}
const renderHeaderPost = (post: PostTyp | PagePostTyp) => (
  <div className="flex items-center gap-3">
    <Avatar className="h-10 w-10" />
    {isPagePostTyp(post)
      ? headerStrategy.page(post)
      : headerStrategy.primary(post)}
  </div>
);
const renderContentPost = (post: PostTyp | PagePostTyp) => (
  <div>
    <p>{post.content}</p>
  </div>
);
const renderActionPost = (post: PostTyp | PagePostTyp) => {
  const interactCount = post?.interact_users.length || 0;
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between text-slate-500">
        <div className="flex items-center gap-2">
          <Icon name="thumbs-up" color="blue" className="h-4 w-4" />
          <p>{interactCount}</p>
        </div>
        <div>
          <p className="text-sm">23 comments</p>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-between">
        <IconButton startIcon={<Icon name="thumbs-up" />} text="Like" />
        <IconButton startIcon={<Icon name="message-circle" />} text="Comment" />
        <IconButton startIcon={<Icon name="send" />} text="Send" />
      </div>
      <hr></hr>
      <div>
        <Button variant={"link"} className="font -ml-3 text-xs text-slate-600">
          View more comments
        </Button>
      </div>
    </div>
  );
};
export { renderHeaderPost, renderContentPost, renderActionPost };
