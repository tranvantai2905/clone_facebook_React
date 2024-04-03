import { cn } from "@/lib/utils";

import NavSection from "./NavSection";
import ShortCutSection from "./ShortCutSection";
import { ReactNode } from "react";

interface LeftSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LeftSidebar({ className }: LeftSidebarProps) {
  const sections = [<NavSection />, <ShortCutSection />];
  const renderSection = (sections: ReactNode[]) =>
    sections.map((section) => section);

  return (
    <div
      className={cn(
        "sticky top-14 col-span-1 hidden self-start pb-12 ease-in-out lg:block",
        className,
      )}
    >
      <div className="space-y-4 py-2">{renderSection(sections)}</div>
    </div>
  );
}
