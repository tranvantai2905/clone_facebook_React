import { timeSince } from "@/utils";
import { MessageTyp } from "./_types";
import { motion } from "framer-motion";

interface ToMessageProps {
  message: MessageTyp;
  idx: number;
}

interface FromMessageProps {
  message: MessageTyp;
  idx: number;
}

const ToMessage = ({ message, idx }: ToMessageProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95, backgroundColor: "#f1f5f9" }}
      drag="x"
      dragConstraints={{ left: -200, right: 0 }}
      className="mb-2 flex w-full flex-col items-start"
      key={idx}
    >
      <div className="flex w-4/5 justify-start space-y-1  rounded-tr-none text-right">
        <p className=" w-fit cursor-pointer rounded-2xl rounded-tl-none bg-blue-500 p-3 pl-5 pr-5 text-sm font-medium leading-none text-white hover:shadow-md">
          {message.message}
        </p>
      </div>
      <div className="mt-2 self-center">
        <p className="text-xs text-muted-foreground">
          {timeSince(message.date)}
        </p>
      </div>
    </motion.div>
  );
};

const FromMessage = ({ message, idx }: FromMessageProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95, backgroundColor: "#f1f5f9" }}
      drag="x"
      dragConstraints={{ left: 0, top: 200, right: 250 }}
      className="mb-2 flex w-full flex-col items-end rounded-2xl"
      key={idx}
    >
      <div className="flex w-4/5 justify-end space-y-1  rounded-tr-none text-right">
        <p className=" w-fit cursor-pointer rounded-2xl rounded-tr-none bg-blue-500 p-3 pl-5 pr-5 text-sm font-medium leading-none text-white hover:shadow-md">
          {message.message}
        </p>
      </div>
      <div className="mt-2 self-center">
        <p className="text-xs text-muted-foreground">
          {timeSince(message.date)}
        </p>
      </div>
    </motion.div>
  );
};

const Message = {
  ToMessage,
  FromMessage,
};

export default Message;
