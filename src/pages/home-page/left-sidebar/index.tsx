import { cn } from "@/lib/utils";

import { item_list, SideBarItemWithIcon, SideBarItemWithImage } from "./item";
import Icon from "@/shared/icon";
import { ShortCut, useShortCutSidebar } from "./custom-hook";
import { Info, useInfo } from "@/pages/shared/custom-hooks";

interface LeftSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LeftSidebar({ className }: LeftSidebarProps) {
  const [shortCuts, setShortCuts] = useShortCutSidebar() as [
    ShortCut[],
    React.Dispatch<React.SetStateAction<ShortCut[] | null>>,
  ];
  const [infos, setInfos] = useInfo() as [
    Info,
    React.Dispatch<React.SetStateAction<Info | null>>,
  ];
  const renderNavSideItems = () =>
    item_list.map((item) => (
      <SideBarItemWithIcon
        startIcon={<Icon name={item.icon_name} />}
        text={item.text}
        className=""
      />
    ));
  const renderInfoItems = () => (
    <SideBarItemWithImage text={infos.username} src={infos.src} />
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
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {renderInfoItems()}
            {renderNavSideItems()}
          </div>
        </div>
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
