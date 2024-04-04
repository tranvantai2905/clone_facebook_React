import Avatar from "@/components/custom/avatar";
import { OnlineUser, Status } from "@/pages/home-page/right-sidebar/_types";
import { Skeleton } from "@/components/ui/skeleton";

const renderSkeletonHeaderInfo = () => {
  return (
    <div className="flex w-[70%] items-center gap-2">
      <div className="relative">
        <Avatar className="h-8 w-8" />

        <Skeleton className="absolute bottom-0 left-4 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-slate-400 dark:border-gray-800"></Skeleton>
      </div>
      <div className="flex w-full flex-col gap-1">
        <Skeleton className=" w-4/5 truncate text-sm font-medium" />
        <Skeleton className="text-xs" />
      </div>
    </div>
  );
};

const renderHeaderInfo = (user: OnlineUser) => {
  return (
    <div className="flex w-[70%] items-center gap-2">
      <div className="relative">
        <Avatar src={user?.avatar_url} className="h-8 w-8" />
        {user?.status === Status.Online ? (
          <span className="absolute bottom-0 left-4 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
        ) : (
          <span className="absolute bottom-0 left-4 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-slate-400 dark:border-gray-800"></span>
        )}
      </div>
      <div className="flex w-full flex-col gap-1">
        <p className=" w-4/5 truncate text-sm font-medium">{user?.username}</p>
        <p className="text-xs">{user?.status}</p>
      </div>
    </div>
  );
};

export { renderHeaderInfo, renderSkeletonHeaderInfo };
