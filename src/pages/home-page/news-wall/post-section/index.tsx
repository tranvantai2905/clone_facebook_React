import Avatar from "@/components/custom/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import PostDialog from "./PostDialog";
import { IconButton } from "../../../shared/component/icon-button";
import Icon from "@/pages/shared/component/icon";
import { PostActionTyp } from "./_types";
import { item } from "./_item";

const PostSection = () => {
  const renderActionSection = (items: PostActionTyp[]) => (
    <div className="mt-6 flex w-full justify-between">
      {items.map((item) => (
        <IconButton
          startIcon={<Icon name={item.icon.name} color={item.icon.color} />}
          text={item.text}
        />
      ))}
    </div>
  );

  return (
    <>
      <Card className="w-full p-5 shadow-lg">
        <CardContent>
          <div className="flex justify-between gap-3">
            <Avatar className="h-10 w-10" />
            <PostDialog />
          </div>
        </CardContent>
        <hr></hr>
        <CardFooter>{renderActionSection(item)}</CardFooter>
      </Card>
    </>
  );
};

export default PostSection;
