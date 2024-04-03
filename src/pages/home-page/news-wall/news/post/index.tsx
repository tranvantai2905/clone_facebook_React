import Avatar from "@/components/custom/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { PostTyp, PagePostTyp } from "../_types";
import {
  renderHeaderPost,
  renderContentPost,
  renderActionPost,
} from "./_renders";

interface PostProps {
  post: PagePostTyp | PostTyp;
}

const Post = ({ post }: PostProps) => {
  const interactCount = post?.interact_users.length || 0;
  return (
    <>
      <Card className="w-full shadow-lg ease-in-out hover:bg-zinc-50">
        <CardHeader>{renderHeaderPost(post)}</CardHeader>
        <CardContent>{renderContentPost(post)}</CardContent>
        <CardFooter>{renderActionPost(post)}</CardFooter>
      </Card>
    </>
  );
};

export default Post;
