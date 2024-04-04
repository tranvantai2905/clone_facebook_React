import { useMemo } from "react";
import { useChatBoxContext } from "../../chat-context";
import { renderHeaderInfo, renderSkeletonHeaderInfo } from "./_render";
import { OnlineUser } from "@/pages/home-page/right-sidebar/_types";

const HeaderInfo = () => {
  const { user } = useChatBoxContext();
  const userMemo = useMemo(() => user, [user]);
  return user
    ? renderHeaderInfo(userMemo as OnlineUser)
    : renderSkeletonHeaderInfo();
};

export default HeaderInfo;
