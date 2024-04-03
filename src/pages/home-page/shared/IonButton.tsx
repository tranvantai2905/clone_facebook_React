import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

interface SideBarItemWithIconProps {
  startIcon: ReactNode;
  text: string;
  className?: string;
  text_className?: string;
}
const IconButton = ({
  startIcon,
  text,
  className,
  text_className,
}: SideBarItemWithIconProps) => {
  return (
    <Link to="" className="flex w-full justify-center">
      <div
        className={cn(
          navigationMenuTriggerStyle(),
          "group",
          "rounded-sm",
          "bg-slate-50",
          "h-13",
          "flex justify-center gap-3 py-3",
          "w-full",
          className,
        )}
      >
        {startIcon}
        <p className={cn("text-center text-sm", text_className)}>{text}</p>
      </div>
    </Link>
  );
};

export { IconButton };
