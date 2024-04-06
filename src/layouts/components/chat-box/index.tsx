import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-message";
import ChatActions from "./chat-actions";
import { ChatBoxContext } from "./chat-context";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";
import { MessageTyp } from "./chat-message/_types";

import httpService from "@/api";
import { User } from "@/app-context/type";

interface ChatBoxProps {
  user: OnlineUserTyp;
  key: string;
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 200,
};

const ChatBox = ({ user, key }: ChatBoxProps) => {
  const [messages, setMessages] = useState<MessageTyp[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMessage = async (user: User) => {
    setIsLoading(true); // Set loading state to true
    try {
      const messages = await httpService.getMessages(user);

      setMessages(messages as MessageTyp[]);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const postMessage = async (user: User, message: MessageTyp) => {
    const result = await httpService.postMessages(user, message);
    return result;
  };

  const addMessage = async (message: MessageTyp) => {
    await postMessage(user, message)
      .then(async (res) => {
        if (res == true) {
          await fetchMessage(user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchMessage(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ChatBoxContext.Provider value={{ user, isLoading, messages, addMessage }}>
      <LazyMotion features={domAnimation}>
        <m.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: -18,
            y: 0,
            rotate: 0,
          }}
          exit={{ x: 18, opacity: 0 }}
          // whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.9 }}
          transition={spring}
        >
          <Card className={"w-80 shadow-2xl"}>
            <ChatHeader />

            <Separator className="my-1" />

            <div className="flex h-[400px] flex-col justify-between">
              <ChatMessages />
              <ChatActions />
            </div>
          </Card>
        </m.div>
      </LazyMotion>
    </ChatBoxContext.Provider>
  );
};

export default memo(ChatBox);
