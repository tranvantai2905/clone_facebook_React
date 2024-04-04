import { useChatBoxContext } from "../chat-context";
import HeaderActions from "./header-actions";
import HeaderInfo from "./header-info";

const ChatHeader = () => {
  const { user } = useChatBoxContext();
  return (
    <>
      {user && (
        <div className="flex justify-between px-2 py-1">
          <HeaderInfo />
          <HeaderActions />
        </div>
      )}
    </>
  );
};

export default ChatHeader;
