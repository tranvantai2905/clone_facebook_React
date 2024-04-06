import { IconButton } from "@/pages/shared/component/icon-button";
import Icon from "@/pages/shared/component/icon";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useState, useEffect } from "react";

interface ChatEmotionPickerProps {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatEmotionPicker = ({ setMessage }: ChatEmotionPickerProps) => {
  const [openPicker, setOpenPicker] = useState(false);

  const handleOpenPicker = () => {
    setOpenPicker((curr) => !curr);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const emojiPickerElement = document.querySelector(".picker"); // Adjust selector if needed
      const emojiPickerElementParent = document.querySelector(".containPicker");
      // Check if the click target is outside the emoji picker element (including its children)
      if (
        emojiPickerElement &&
        emojiPickerElementParent &&
        !emojiPickerElement.contains(event.target) &&
        !emojiPickerElementParent.contains(event.target)
      ) {
        setOpenPicker(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [openPicker]);

  return (
    <div className="containPicker relative flex h-full w-fit items-end justify-center ">
      <IconButton
        className={`col-span-1`}
        onClick={() => handleOpenPicker()}
        startIcon={<Icon name="smile" className="h-5 w-5 p-0" />}
      />

      <AnimatePresence>
        {openPicker && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="picker absolute -left-[300px] -top-[450px] w-[100px]"
          >
            <Picker
              data={data}
              onEmojiSelect={(icon) => setMessage((curr) => curr + icon.native)}
              previewPosition={"none"}
              navPosition={"bottom"}
              theme={"light"}
              locale={"vn"}
              skin={5}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(ChatEmotionPicker);
