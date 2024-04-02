import { cn } from "@/lib/utils";

import { item_list } from "./item";
import { SideBarItemWithIcon, SideBarItemWithImage } from "../shared/item";
import Icon from "@/shared/icon";
import { ShortCut, useShortCutSidebar } from "./custom-hook";
import { Info, useInfo } from "@/pages/shared/custom-hooks";

interface LeftSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LeftSidebar({ className }: LeftSidebarProps) {
  const [shortCuts] = useShortCutSidebar() as [ShortCut[]];
  const [infos] = useInfo() as [Info];
  console.log(infos, shortCuts);
  const renderNavSideItems = () =>
    item_list.map((item) => (
      <SideBarItemWithIcon
        startIcon={<Icon name={item.icon_name} />}
        text={item.text}
        className=""
      />
    ));
  const renderInfoItems = () => (
    <SideBarItemWithImage text={infos?.username} src={infos?.src} />
  );
  const renderShortCutItems = () =>
    shortCuts?.map((item: ShortCut) => (
      <SideBarItemWithImage
        src={item.src}
        text={item.text}
        className="rounded-xs"
      />
    ));
  return (
    <div
      className={cn(
        "sticky top-14 col-span-1 hidden self-start pb-12 ease-in-out md:block",
        className,
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {renderInfoItems()}
            {renderNavSideItems()}
          </div>
        </div>
        <hr></hr>
        <div className="space-y-4 py-2">
          <h2 className="z-0 px-7 text-lg font-semibold tracking-tight">
            Your shortcuts
          </h2>
          <div className="px-3 py-2">
            <div className="space-y-1">{renderShortCutItems()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
