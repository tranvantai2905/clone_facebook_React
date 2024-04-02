import { cn } from "@/lib/utils";

import { OnlineUser, Page, usePages, useOnlineUsers } from "./custom-hook";
import { renderPages, renderOnlineUsers } from "./renders";

interface RightSideBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RightSideBar({ className }: RightSideBarProps) {
  const [pages] = usePages() as [Page[]];
  const [onlineUser] = useOnlineUsers() as [OnlineUser[]];
  return (
    <div
      className={cn(
        "sticky top-14 col-span-1 hidden max-h-[900px] self-start overflow-y-scroll pb-12 ease-in-out lg:block",
        className,
      )}
    >
      <div className="space-y-4 py-4">
        <div className="py-2 pl-3">
          <div className="space-y-1">{renderPages(pages)}</div>
        </div>
        <hr></hr>
        <div className="py-2 pl-3">
          <div className="space-y-1">{renderOnlineUsers(onlineUser)}</div>
        </div>
      </div>
    </div>
  );
}
