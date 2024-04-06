import { LoginUser, User } from "@/app-context/type";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import http from "./https-api";
import { mockUserInfo, mockMessages } from "./_mock-data";
import {
  MessageTyp,
  WhoSend,
} from "../layouts/components/chat-box/chat-message/_types";
import { AxiosInstance } from "axios";

class HttpService {
  messages: MessageTyp[];
  http: AxiosInstance;
  constructor() {
    this.messages = mockMessages;
    this.http = http;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getUserInfo(_loginUser: LoginUser) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const userInfo = mockUserInfo;
    return userInfo;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getMessages(_toUser: User) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const messages = this.messages;
    return messages;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postMessages(_toUser: User, _message: MessageTyp) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.messages = [...this.messages, _message];
    return true;
  }
  async callOpenAI() {
    // const last10Messages = this.messages.slice(-10).reverse();
    // const history = formatHistory(last10Messages);
    // // const history = "";
    // const question = this.messages.at(this.messages.length - 1);
    // const content = `Hãy trả lời câu hỏi sau của tôi: ${question?.message} \n. Với lịch sử trò chuyện như sau: ${history}`;

    // console.log(content);

    // const requestData = {
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: content }],
    //   temperature: 0.7,
    // };

    // try {
    //   const response = await this.http.post(
    //     `/v1/chat/completions`,
    //     requestData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY_GPT}`,
    //       },
    //       timeout: 3000, // Timeout set to 3 seconds (3000 milliseconds)
    //     },
    //   );

    //   // Handle the API response here
    //   // console.log('check content: ', response.data.choices[0].message.content);
    //   const chatGPTmessage: MessageTyp = {
    //     message: response.data.choices[0].message.content,
    //     date: new Date(),
    //     type: WhoSend.Sender,
    //   };
    const chatGPTMessage: MessageTyp = {
      message: "Tôi ghét bạn",
      date: new Date(),
      type: WhoSend.Sender,
    };
    await new Promise((resolve) => setTimeout(resolve, 3000));
    this.messages = [...this.messages, chatGPTMessage];
    //   } catch (error) {
    //     // Handle any errors here
    //     console.error(error);
    //     return "API KEY của Open AI hết hạn rồi bạn ơi, lên lấy lại mà dùng :V !!!";
    //   }
    // }
  }
}

// function formatHistory(messages: MessageTyp[]): string {
//   return messages.reduce((acc, message) => {
//     const formattedMessage = `${message.type === WhoSend.Me ? "Tôi" : message.type}: ${message.message} (at ${message.date.toLocaleString()})`;
//     return `${acc ? `${acc}\n` : ""}${formattedMessage}`;
//   }, "");
// }

const httpService = new HttpService();
export default httpService;
