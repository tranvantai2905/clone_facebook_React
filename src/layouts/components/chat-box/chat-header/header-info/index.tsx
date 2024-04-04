import { useChatBoxContext } from "../../chat-context";
import { renderHeaderInfo, renderSkeletonHeaderInfo } from "./_render";

const HeaderInfo = () => {
  const { user } = useChatBoxContext();
  return user ? renderHeaderInfo(user) : renderSkeletonHeaderInfo();
};

export default HeaderInfo;
