import { cn } from "@/lib/utils";

import PageSection from "./PageSection";
import OnlineUserSection from "./OnlineUserSection";
import { ReactNode } from "react";

interface RightSideBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RightSideBar({ className }: RightSideBarProps) {
  const sections = [<PageSection />, <OnlineUserSection />];

  const renderSection = (sections: ReactNode[]) =>
    sections.map((section) => (
      <div className="py-2 pl-3">
        <div className="space-y-1">{section}</div>
        <hr></hr>
      </div>
    ));

  return (
    <div
      className={cn(
        "sticky top-14 col-span-1 hidden max-h-[900px] self-start overflow-y-scroll pb-12 ease-in-out lg:block",
        className,
      )}
    >
      <div className="space-y-4 py-4">{renderSection(sections)}</div>
    </div>
  );
}
