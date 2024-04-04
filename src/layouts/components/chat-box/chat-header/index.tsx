import HeaderActions from "./header-actions";
import HeaderInfo from "./header-info";

const ChatHeader = () => {
  return (
    <>
      <div className="flex justify-between px-2 py-1">
        <HeaderInfo />
        <HeaderActions />
      </div>
    </>
  );
};

export default ChatHeader;
