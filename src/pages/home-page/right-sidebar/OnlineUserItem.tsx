import { useContext } from "react";
import { SideBarItemWithUser } from "../shared/SideBarItem";
import { OnlineUserTyp } from "./_types";
import { ChatContext } from "@/layouts/chat-context";
import { ChatContextTyp } from "@/layouts/chat-context/_types";

interface OnlineUserItemProps {
  user: OnlineUserTyp;
}
const OnlineUserItem = ({ user }: OnlineUserItemProps) => {
  const { addUser } = useContext(ChatContext) as ChatContextTyp;

  const handleClick = () => {
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
