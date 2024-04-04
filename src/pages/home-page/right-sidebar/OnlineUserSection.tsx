import { useOnlineUsers } from "./_custom-hook";
import { renderOnlineUsers } from "./_renders";
import { OnlineUser } from "./_types";

const OnlineUserSection = () => {
  const [onlineUser] = useOnlineUsers() as [OnlineUser[]];
  return <>{renderOnlineUsers(onlineUser)}</>;
};

export default OnlineUserSection;
