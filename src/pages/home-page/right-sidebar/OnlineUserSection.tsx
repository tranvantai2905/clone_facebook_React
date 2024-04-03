import { OnlineUser, useOnlineUsers } from "./_custom-hook";
import { renderOnlineUsers } from "./_renders";

const OnlineUserSection = () => {
  const [onlineUser] = useOnlineUsers() as [OnlineUser[]];
  return <>{renderOnlineUsers(onlineUser)}</>;
};

export default OnlineUserSection;
