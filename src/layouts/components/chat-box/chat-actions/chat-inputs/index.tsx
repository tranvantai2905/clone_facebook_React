import CustomInput from "@/components/custom/input";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { forwardRef, useState } from "react";

interface ChatInputProps {
  setHadMessage: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
const ChatInputs = forwardRef<HTMLInputElement, ChatInputProps>(
  ({ setHadMessage }, ref) => {
    const [message, setMessage] = useState("");
    const [expand, setExpand] = useState(false);

    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value !== "" && message == "") setHadMessage(true);
      else if (e.target.value == "") setHadMessage(false);

      setMessage(e.target.value);
    };
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
          className={`relative flex items-center  ${expand ? "col-span-8" : "col-span-5"}`}
        >
          <CustomInput
            className={`rounded-full pr-10 focus:outline-none`}
            onFocus={() => setExpand(true)}
            onBlur={() => setExpand(false)}
            value={message}
            onChange={(e) => handleChangeMessage(e)}
            ref={ref}
          />
          <Icon name="smile" className="-ml-7 h-5 w-5" />
        </div>
      </div>
    );
  },
);

export default ChatInputs;
