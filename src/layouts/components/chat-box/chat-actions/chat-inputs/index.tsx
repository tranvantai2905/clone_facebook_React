import CustomInput from "@/components/custom/input";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { Dispatch, useState } from "react";

interface ChatInputProps {
  message: string;
  setMessage: Dispatch<React.SetStateAction<string>>;
}
const ChatInputs = ({ message, setMessage }: ChatInputProps) => {
  const [expand, setExpand] = useState(false);
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
          startIcon={<Icon name="smile" className="h-5 w-5" />}
        />
      )}
      {!expand && (
        <IconButton
          className={`col-span-1`}
          startIcon={<Icon name="gift" className="h-5 w-5" />}
        />
      )}
      <CustomInput
        className={`${expand ? "col-span-8" : "col-span-5"} rounded-full focus:outline-none`}
        onFocus={() => setExpand(true)}
        onBlur={() => setExpand(false)}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default ChatInputs;
