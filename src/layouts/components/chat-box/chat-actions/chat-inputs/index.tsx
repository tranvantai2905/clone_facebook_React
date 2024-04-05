import CustomInput from "@/components/custom/input";
import { Textarea } from "@/components/ui/textarea";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { forwardRef, memo, useEffect, useMemo, useState } from "react";
import ChatEmotionPicker from "./chat-emotion-picker";

interface ChatInputProps {
  setHadMessage: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
const ChatInputs = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ setHadMessage }, ref) => {
    const [message, setMessage] = useState("");
    const [expand, setExpand] = useState(false);

    const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.value !== "" && message == "") setHadMessage(true);
      else if (e.target.value == "") setHadMessage(false);

      setMessage(e.target.value);
    };
    useEffect(() => {
      if (message !== "") setExpand(true);
      else setExpand(false);
    }, [message]);
    return (
      <div className="col-span-8 grid grid-cols-8">
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
          className={`relative flex items-start  ${expand ? "col-span-8" : "col-span-5"}`}
        >
          <Textarea
            rows={1}
            className={`resize-y rounded-xl scrollbar-none focus:outline-none`}
            onFocus={() => setExpand(true)}
            onBlur={() => setExpand(false)}
            value={message}
            onChange={(e) => handleChangeMessage(e)}
            ref={ref}
          />
          <ChatEmotionPicker setMessage={setMessage} />
        </div>
      </div>
    );
  },
);

export default memo(ChatInputs);
