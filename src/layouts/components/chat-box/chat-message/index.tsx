import { MessageTyp } from "./_types";
import { renderMessages } from "./_render";
import { useChatBoxContext } from "../chat-context";
import { useEffect, useMemo, useRef } from "react";
import { OnlineUserTyp } from "@/pages/home-page/right-sidebar/_types";
import React, { forwardRef } from "react";
import Spiner from "@/pages/shared/component/spiner";

interface ChatMessagesProps {
  user: OnlineUserTyp;
  messages: MessageTyp[];
  isLoading: boolean;
}

const ChatMessages = forwardRef(
  ({ user, messages, isLoading }: ChatMessagesProps, ref) => {
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
    };
    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    return (
      <div className="relative">
        <Spiner isLoading={isLoading} className="absolute left-0 right-0" />
        <div
          className={`grid h-80 gap-4 overflow-y-scroll p-2 pb-0 pt-5 ${isLoading ? "opacity-70" : "opacity-100"}`}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          {renderMessages(messages)}
          <div ref={messagesEndRef as React.RefObject<HTMLDivElement>} />
        </div>
      </div>
    );
  },
);

const ChatMessagesHOC = () => {
  const { user, messages, isLoading } = useChatBoxContext();

  const userMemo = useMemo(() => user, [user]);
  const messagesMemo = useMemo(() => messages, [messages]);
  const isLoadingMemo = useMemo(() => isLoading, [isLoading]);

  return (
    <>
      <ChatMessages
        user={userMemo as OnlineUserTyp}
        messages={messagesMemo as MessageTyp[]}
        isLoading={isLoadingMemo as boolean}
      />
    </>
  );
};

export default ChatMessagesHOC;
