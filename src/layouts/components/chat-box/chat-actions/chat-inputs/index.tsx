import { IconButton } from "@/pages/shared/component/icon-button";
import Icon from "@/pages/shared/component/icon";
import { ChangeEvent, forwardRef, memo, useEffect, useState } from "react";
import ChatEmotionPicker from "./chat-emotion-picker";
import CustomTextareaAutosize from "@/pages/shared/component/custom-texterea-auto-resize";
import { MessageTyp, WhoSend } from "../../chat-message/_types";
import { useChatBoxContext } from "../../chat-context";

interface ChatInputProps {
  setHadMessage: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
// eslint-disable-next-line react-refresh/only-export-components
const ChatInputs = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ setHadMessage }, ref) => {
    const { addMessage } = useChatBoxContext();

    const [message, setMessage] = useState("");
    const [expand, setExpand] = useState(false);

    const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
    };
    const handleSend = () => {
      const curr_message: MessageTyp = {
        type: WhoSend.Me,
        message: message as string,
        date: new Date(),
      };
      addMessage(curr_message);
    };
    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        handleSend();
        setMessage("");
      }
    };
    useEffect(() => {
      if (message !== "") {
        setExpand(true);
        setHadMessage(true);
      } else {
        setExpand(false);
        setHadMessage(false);
      }
    }, [message, setHadMessage]);
    return (
      <div className="col-span-8 grid grid-cols-8 items-end">
        {!expand && (
          <IconButton
            className={`col-span-1`}
            startIcon={<Icon name="image-up" className="h-5 w-5" />}
          />
        )}
        {!expand && (
          <IconButton
            className={`col-span-1`}
            startIcon={<Icon name="smile-plus" className="h-5 w-5" />}
          />
        )}
        {!expand && (
          <IconButton
            className={`col-span-1`}
            startIcon={<Icon name="gift" className="h-5 w-5" />}
          />
        )}
        <div
          className={`relative flex items-end  ${expand ? "col-span-8" : "col-span-5"}`}
        >
          <CustomTextareaAutosize
            onFocus={() => setExpand(true)}
            onBlur={() => setExpand(false)}
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleChangeMessage(e)
            }
            onKeyDown={handleEnter}
            ref={ref}
          />
          <ChatEmotionPicker setMessage={setMessage} />
        </div>
      </div>
    );
  },
);

export default memo(ChatInputs);
