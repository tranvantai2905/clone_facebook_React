import CustomInput from "@/components/custom/input";
import { IconButton } from "@/pages/home-page/shared/IonButton";
import Icon from "@/shared/icon";
import { useChatBoxContext } from "../chat-context";

const ChatActions = () => {
  const { user } = useChatBoxContext();
  return (
    <div className="grid grid-cols-10 px-1 py-2">
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="plus" className="h-5 w-5" />}
      />
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="image-up" className="h-5 w-5" />}
      />
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="smile" className="h-5 w-5" />}
      />
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="gift" className="h-5 w-5" />}
      />

      <CustomInput className="col-span-5 rounded-full focus:outline-none" />
      <IconButton
        className="col-span-1"
        startIcon={<Icon name="thumbs-up" className="h-5 w-5" />}
      />
    </div>
  );
};

export default ChatActions;
