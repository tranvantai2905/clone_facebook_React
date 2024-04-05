import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navigationMenuTriggerStyle = cva(
  "group inline-flex w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

interface SideBarItemWithIconProps {
  startIcon: ReactNode;
  text?: string;
  className?: string;
  text_className?: string;
  onClick?: () => void;
}
const IconLink = ({
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
        {text && (
          <p className={cn("text-center text-sm", text_className)}>{text}</p>
        )}
      </div>
    </Link>
  );
};

const IconButton = ({
  startIcon,
  text,
  className,
  text_className,
  onClick,
}: SideBarItemWithIconProps) => {
  return (
    <Button
      variant="ghost"
      className="flex w-full justify-center rounded-lg"
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.1, color: "#083344" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={cn(
          "flex items-center justify-center gap-3 p-1",
          "h-8 w-full md:min-w-8",
          className,
        )}
      >
        {startIcon}
        {text && (
          <p className={cn("text-center text-sm", text_className)}>{text}</p>
        )}
      </motion.div>
    </Button>
  );
};

export { IconButton, IconLink };
