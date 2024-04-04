import { useContext } from "react";
import { SideBarItemWithUser } from "../shared/SideBarItem";
import { OnlineUser } from "./_types";
import { ChatContext } from "@/layouts/chat-context";
import { ChatContextTyp } from "@/layouts/chat-context/_types";

interface OnlineUserItemProps {
  user: OnlineUser;
}
const OnlineUserItem = ({ user }: OnlineUserItemProps) => {
  const { addUser } = useContext(ChatContext) as ChatContextTyp;

  const handleClick = () => {
    console.log("handleClick", { user });
    addUser(user);
  };

  return (
    <SideBarItemWithUser
      src={user.avatar_url}
      text={user.username}
      status={user.status}
      onClick={handleClick}
    />
  );
};

export default OnlineUserItem;
