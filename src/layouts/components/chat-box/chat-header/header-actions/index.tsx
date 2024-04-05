import { ChatContext } from "@/layouts/chat-context";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { memo, useCallback, useContext, useMemo } from "react";
import { useChatBoxContext } from "../../chat-context";
import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";

interface HeaderActionsProps {
  user: OnlineUserTyp;
  handleCloseBox: () => void;
}

const HeaderActions = memo(
  ({ user, handleCloseBox }: HeaderActionsProps) => {
    console.log("HeaderActions: ", user.username, "render");
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
  },
  (prev: HeaderActionsProps, next: HeaderActionsProps) => {
    console.log(
      "HeaderActions: ",
      prev.user.username,
      " => ",
      next.user.username,
    );
    return prev.user.username === next.user.username;
  },
);

const HeaderActionsHOC = () => {
  const { removeUser } = useContext(ChatContext);

  const { user } = useChatBoxContext();
  const userMemo = useMemo(() => user, [user]);
  const handleCloseBox = useCallback(() => {
    console.log("removeUser", userMemo?.username);
    removeUser(userMemo as OnlineUserTyp);
  }, [removeUser, userMemo]);

  return (
    <>
      <HeaderActions
        user={userMemo as OnlineUserTyp}
        handleCloseBox={handleCloseBox}
      />
    </>
  );
};

export default HeaderActionsHOC;
