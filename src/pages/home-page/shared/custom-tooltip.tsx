import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface CustomTooltipProps {
  children: ReactNode;
  text: string;
}

export function CustomTooltip({ children, text }: CustomTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">{children}</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
