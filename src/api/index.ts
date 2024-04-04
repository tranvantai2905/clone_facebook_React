import { LoginUser } from "@/app-context/type";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import http from "./https-api";
import { mockUserInfo } from "./_mock-data";

class HttpService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserInfo(_loginUser: LoginUser) {
    const userInfo = mockUserInfo;
    return userInfo;
  }
}

export default new HttpService();
