import { useMessages } from "./_custom-hook";
import { MessageTyp } from "./_types";
import { renderMessages } from "./_render";
import { useChatBoxContext } from "../chat-context";
import { useEffect, useMemo, useRef } from "react";
import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";
import React, { forwardRef } from "react";

interface ChatMessagesProps {
  user: OnlineUserTyp;
  messages: MessageTyp[];
}

const ChatMessages = forwardRef(
  ({ user, messages }: ChatMessagesProps, ref) => {
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    return (
      <div
        className="grid h-80 gap-4 overflow-y-scroll p-2 pb-0 pt-5"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        {renderMessages(messages)}
        <div ref={messagesEndRef as React.RefObject<HTMLDivElement>} />
      </div>
    );
  },
);

const ChatMessagesHOC = () => {
  const { user } = useChatBoxContext();
  const [messages] = useMessages() as [MessageTyp[]];

  const userMemo = useMemo(() => user, [user]);
  const messagesMemo = useMemo(() => messages, [messages]);

  return (
    <>
      <ChatMessages user={userMemo as OnlineUserTyp} messages={messagesMemo} />
    </>
  );
};

export default ChatMessagesHOC;
