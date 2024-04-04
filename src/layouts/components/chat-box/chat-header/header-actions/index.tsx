import { ChatContext } from "@/layouts/chat-context";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { useContext, useMemo } from "react";
import { useChatBoxContext } from "../../chat-context";
import { OnlineUser } from "@/pages/home-page/right-sidebar/_types";

const HeaderActions = () => {
  const { removeUser } = useContext(ChatContext);
  const { user } = useChatBoxContext();
  const userMemo = useMemo(() => user, [user]);
  const handleCloseBox = () => {
    removeUser(userMemo as OnlineUser);
  };
  return (
    <div className="grid w-[30%] grid-flow-col grid-cols-4 justify-end">
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="phone-call" className="h-4 w-4" />}
      />
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="video" className="h-4 w-4" />}
      />
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="minus" className="h-4 w-4" />}
      />
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="x" className="h-4 w-4" />}
        onClick={handleCloseBox}
      />
    </div>
  );
};

export default HeaderActions;
