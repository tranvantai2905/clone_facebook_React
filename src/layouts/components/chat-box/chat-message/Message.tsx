import { timeSince } from "@/utils";
import { MessageTyp } from "./_types";

interface ToMessageProps {
  message: MessageTyp;
}

interface FromMessageProps {
  message: MessageTyp;
}

const ToMessage = ({ message }: ToMessageProps) => {
  return (
    <div className="mb-2 flex w-full flex-col items-end">
      <div className="flex w-4/5 justify-end space-y-1  rounded-tr-none text-right">
        <p className="w-fit rounded-2xl rounded-tr-none bg-blue-500 p-3 pl-5 pr-5 text-sm font-medium leading-none text-white">
          {message.message}
        </p>
      </div>
      <div className="mt-2 self-center">
        <p className="text-xs text-muted-foreground">
          {timeSince(message.date)}
        </p>
      </div>
    </div>
  );
};

const FromMessage = ({ message }: FromMessageProps) => {
  console.log(message);
  return (
    <div className="mb-2 flex w-full flex-col items-end">
      <div className="flex w-4/5 justify-end space-y-1  rounded-tr-none text-right">
        <p className="w-fit rounded-2xl rounded-tr-none bg-blue-500 p-3 pl-5 pr-5 text-sm font-medium leading-none text-white">
          {message.message}
        </p>
      </div>
      <div className="mt-2 self-center">
        <p className="text-xs text-muted-foreground">
          {timeSince(message.date)}
        </p>
      </div>
    </div>
  );
};

const Message = {
  ToMessage,
  FromMessage,
};

export default Message;
