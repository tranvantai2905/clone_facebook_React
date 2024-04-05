import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";
import ChatBox from "../components/chat-box";

const renderChatBox = (users: OnlineUserTyp[]) =>
  users.map((user) => <ChatBox user={user} key={"user-chat"} />);

export { renderChatBox };
