import Avatar from "@/components/custom/avatar";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

interface SideBarItemWithIconProps {
  startIcon: ReactNode;
  text: string;
  className?: string;
}
const SideBarItemWithIcon = ({
  startIcon,
  text,
  className,
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
        <p className="text-sm">{text}</p>
      </div>
    </Link>
  );
};

interface SideBarItemWithImageProps {
  src?: string;
  text: string;
  className?: string;
}

const SideBarItemWithImage = ({
  src,
  text,
  className,
}: SideBarItemWithImageProps) => {
  return (
    <Link to="/login">
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
type Item = {
  text: string;
  icon_name: keyof typeof dynamicIconImports;
};
const item_list: Item[] = [
  { text: "Friend", icon_name: "users-round" },
  { text: "Video", icon_name: "tv" },
  { text: "Groups", icon_name: "group" },
  { text: "Event", icon_name: "calendar-check" },
  { text: "Memories", icon_name: "rotate-ccw" },
];
export { SideBarItemWithImage, SideBarItemWithIcon, item_list };
