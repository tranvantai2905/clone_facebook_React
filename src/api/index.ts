import { LoginUser, User } from "@/app-context/type";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import http from "./https-api";
import { mockUserInfo, mockMessages } from "./_mock-data";
import { MessageTyp } from "../layouts/components/chat-box/chat-message/_types";

class HttpService {
  messages: MessageTyp[];
  constructor() {
    this.messages = mockMessages;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getUserInfo(_loginUser: LoginUser) {
    const userInfo = mockUserInfo;
    return userInfo;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getMessages(_toUser: User) {
    const messages = this.messages;
    return messages;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postMessages(_toUser: User, _message: MessageTyp) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.messages = [...this.messages, _message];
    return true;
  }
}
const httpService = new HttpService();
export default httpService;
