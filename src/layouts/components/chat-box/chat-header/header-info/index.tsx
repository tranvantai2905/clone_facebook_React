import { useMemo } from "react";
import { useChatBoxContext } from "../../chat-context";
import { renderHeaderInfo, renderSkeletonHeaderInfo } from "./_render";
import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";

interface HeaderInfoProps {
  user: OnlineUserTyp;
}
const HeaderInfo = ({ user }: HeaderInfoProps) => {
  return user
    ? renderHeaderInfo(user as OnlineUserTyp)
    : renderSkeletonHeaderInfo();
};

const HeaderInfoHOC = () => {
  const { user } = useChatBoxContext();
  const userMemo = useMemo(() => user, [user]);

  return (
    <>
      <HeaderInfo user={userMemo as OnlineUserTyp} />
    </>
  );
};
export default HeaderInfoHOC;
