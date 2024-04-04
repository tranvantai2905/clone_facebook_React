import Avatar from "@/components/custom/avatar";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import { Button } from "@/components/ui/button";
import { Status } from "../right-sidebar/_types";

export type Item = {
  text: string;
  icon_name: keyof typeof dynamicIconImports;
};

const navigationMenuTriggerStyle = cva(
  "inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

interface SideBarItemWithIconProps {
  startIcon: ReactNode;
  text: string;
  className?: string;
  text_className?: string;
}
const SideBarItemWithIcon = ({
  startIcon,
  text,
  className,
  text_className,
}: SideBarItemWithIconProps) => {
  return (
    <Link to="">
      <div
        className={cn(
          navigationMenuTriggerStyle(),
          "group",
          "rounded-sm",
          "bg-slate-50",
          "h-13",
          "flex justify-start gap-3 py-3",
          "w-full",
          className,
        )}
      >
        {startIcon}
        <p className={cn("text-sm", text_className)}>{text}</p>
      </div>
    </Link>
  );
};

interface SideBarItemWithImageProps {
  src?: string;
  text: string;
  className?: string;
  to?: string;
}

const SideBarItemWithImage = ({
  to,
  src,
  text,
  className,
}: SideBarItemWithImageProps) => {
  return (
    <Link to={to as string}>
      <div
        className={cn(
          navigationMenuTriggerStyle(),
          "group",
          "rounded-sm",
          "bg-slate-50",
          "h-13",
          "flex justify-start gap-3 py-3",
          "w-full",
          className,
        )}
      >
        <Avatar src={src} />
        <p className="text-sm">{text}</p>
      </div>
    </Link>
  );
};

interface SideBarItemWithUserProps {
  src?: string;
  text: string;
  className?: string;
  status?: Status;
  onClick: () => void;
}

const SideBarItemWithUser = ({
  src,
  text,
  className,
  status,
  onClick,
}: SideBarItemWithUserProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        navigationMenuTriggerStyle(),
        "rounded-sm",
        "bg-slate-50",
        "h-13",
        "flex justify-start gap-5 py-3",
        "w-full",
        className,
      )}
    >
      <div className="relative">
        <Avatar src={src} />
        {status === Status.Online ? (
          <span className="absolute bottom-0 left-4 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
        ) : (
          <span className="absolute bottom-0 left-4 h-3.5 w-3.5 translate-y-1/4 transform rounded-full border-2 border-white bg-slate-400 dark:border-gray-800"></span>
        )}
      </div>
      <p className="text-sm text-black">{text}</p>
    </Button>
  );
};

export { SideBarItemWithImage, SideBarItemWithIcon, SideBarItemWithUser };
