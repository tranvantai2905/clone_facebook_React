import { SelectedUser } from "../chat-context/types";
import ChatBox from "../components/chat-box";

const renderChatBox = (users: SelectedUser[]) =>
  users.map((user) => <ChatBox user={user} />);

export { renderChatBox };
