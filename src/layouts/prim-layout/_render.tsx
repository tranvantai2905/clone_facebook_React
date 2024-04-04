import { OnlineUser } from "@/pages/home-page/right-sidebar/_types";
import ChatBox from "../components/chat-box";

const renderChatBox = (users: OnlineUser[]) =>
  users.map((user) => <ChatBox user={user} />);

export { renderChatBox };
