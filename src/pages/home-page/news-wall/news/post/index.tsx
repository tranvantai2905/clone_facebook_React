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
import { Link } from "react-router-dom";
const Post = () => {
  return (
    <>
      <Card className="w-full shadow-lg ease-in-out hover:bg-zinc-50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10" />
            <div className="flex flex-col gap-1">
              <Link to="">
                <p className="text-sm font-bold">Kiếm Đến (kiếm lai-剑来)</p>
              </Link>
              <div className="flex items-center gap-2 text-xs">
                <Link to="">
                  <p>Nguyên Ngủ Gật</p>
                </Link>
                ·<Link to="">59m</Link>
                ·
                <Icon name="users-round" className="h-3 w-3" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <p>Cho mik hỏi tại sao thôi thành lại ko lên 11 cảnh v ạ</p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex items-center gap-2">
                <Icon name="thumbs-up" color="blue" className="h-4 w-4" />
                <p>6</p>
              </div>
              <div>
                <p className="text-sm">23 comments</p>
              </div>
            </div>
            <hr></hr>
            <div className="flex justify-between">
              <IconButton startIcon={<Icon name="thumbs-up" />} text="Like" />
              <IconButton
                startIcon={<Icon name="message-circle" />}
                text="Comment"
              />
              <IconButton startIcon={<Icon name="send" />} text="Send" />
            </div>
            <hr></hr>
            <div>
              <Button
                variant={"link"}
                className="font -ml-3 text-xs text-slate-600"
              >
                View more comments
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Post;
