import { useOnlineUsers } from "./_custom-hook";
import { renderOnlineUsers } from "./_renders";
import { OnlineUserTyp } from "./_types";

const OnlineUserSection = () => {
  const [onlineUser] = useOnlineUsers() as [OnlineUserTyp[]];
  return <>{renderOnlineUsers(onlineUser)}</>;
};

export default OnlineUserSection;
