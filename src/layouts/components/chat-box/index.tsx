import { SelectedUser } from "@/layouts/chat-context/types";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Avatar from "@/components/custom/avatar";
import Icon from "@/shared/icon";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import CustomInput from "@/components/custom/input";

interface ChatBoxProps {
  user: SelectedUser;
}

const ChatBox = ({ user }: ChatBoxProps) => {
  return (
    <div className="fixed bottom-0 right-10">
      <Card className={cn("w-[350px]")}>
        <CardHeader className="px-2 py-1">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                className="h-8 w-8"
                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/434219048_425185313390932_2549791162286042550_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFse4ESrun1-PtHlPGDHsn3L13EhosqYnAvXcSGiypicL4H6pUvy1U_66LYzDQZqv7zOkNzZrB0asetuVi6cYEj&_nc_ohc=MXjJD6HNRPwAX98A-sK&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCTuwuVLKjgrBMoP5ELl7OgHXvXAB5VNvV-DEZv3BLPxQ&oe=66130159"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Crush ❤</p>
                <p className="text-xs">Active now</p>
              </div>
            </div>
            {/* action */}
            <div className="flex w-1/2 justify-end gap-1">
              <Button variant={"ghost"} className="p-1">
                <Icon name="phone-call" className="h-5 w-5" />
              </Button>
              <Button variant={"ghost"} className="p-1">
                <Icon name="video" className="h-5 w-5" />
              </Button>
              <Button variant={"ghost"} className="p-1">
                <Icon name="minus" className="h-5 w-5" />
              </Button>
              <Button variant={"ghost"} className="p-1">
                <Icon name="x" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <Separator className="my-1" />

        <CardContent className="grid max-h-[400px] gap-4 overflow-y-scroll pb-0 pt-5">
          <div className="mb-2 flex w-full flex-col items-end">
            <div className="flex w-4/5 justify-end space-y-1  rounded-tr-none text-right">
              <p className="w-fit rounded-2xl rounded-tr-none bg-blue-500 p-3 pl-5 pr-5 text-sm font-medium leading-none text-white">
                {"I love you <36"}
              </p>
            </div>
            <div className="mt-2 self-center">
              <p className="text-xs text-muted-foreground">{"1 hour ago"}</p>
            </div>
          </div>
          <div className="mb-5 flex w-full flex-col items-end">
            <div className="flex w-4/5 justify-end space-y-1 text-right">
              <p className="rounded-2xl rounded-tr-none bg-blue-500 p-2 pl-5 pr-5 text-sm font-medium leading-5 text-white">
                {"I love you <36"}
              </p>
            </div>
            <div className="mt-2 self-center">
              <p className="text-xs text-muted-foreground">{"1 hour ago"}</p>
            </div>
          </div>
          <div className="mb-5 flex w-full flex-col items-start">
            <div className="flex w-4/5 justify-start space-y-1 text-left">
              <p className="rounded-2xl rounded-tl-none bg-blue-500 p-2 pl-5 pr-5 text-sm font-medium leading-5 text-white">
                {"I love you, too <36"}
              </p>
            </div>
            <div className="mt-2 self-center">
              <p className="text-xs text-muted-foreground">{"now"}</p>
            </div>
          </div>
          <div className="mb-5 flex w-full flex-col items-start">
            <div className="flex w-4/5 justify-start space-y-1 text-left">
              <p className="rounded-2xl rounded-tl-none bg-blue-500 p-2 pl-5 pr-5 text-sm font-medium leading-5 text-white">
                {
                  "Fucking idiot, i am just kidding. Will cry all night, poor boy :))"
                }
              </p>
            </div>
            <div className="mt-2 self-center">
              <p className="text-xs text-muted-foreground">{"now"}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-1 py-2">
          <div className="grid grid-cols-10">
            <Button variant={"ghost"} className="col-span-1 p-1">
              <Icon name="plus" className="h-5 w-5" />
            </Button>
            <Button variant={"ghost"} className="col-span-1 p-1">
              <Icon name="image-up" className="h-5 w-5" />
            </Button>
            <Button variant={"ghost"} className="col-span-1 p-1">
              <Icon name="smile" className="h-5 w-5" />
            </Button>
            <Button variant={"ghost"} className="col-span-1 p-1">
              <Icon name="gift" className="h-5 w-5" />
            </Button>
            <CustomInput className="col-span-5 rounded-full focus:outline-none" />
            <Button variant={"ghost"} className="col-span-1 p-1">
              <Icon name="thumbs-up" className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatBox;
