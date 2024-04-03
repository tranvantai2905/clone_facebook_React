import {
  Item,
  SideBarItemWithIcon,
  SideBarItemWithImage,
} from "../shared/SideBarItem";

import Icon from "@/shared/icon";
import { ShortCut } from "./_types";
import { Info } from "@/pages/shared/custom-hooks/_types";

const renderNavSideItems = (item_list: Item[]) =>
  item_list.map((item) => (
    <SideBarItemWithIcon
      startIcon={<Icon name={item.icon_name} />}
      text={item.text}
      className=""
    />
  ));
const renderInfoItems = (infos: Info) => (
  <SideBarItemWithImage text={infos?.username} src={infos?.src} />
);
const renderShortCutItems = (shortCuts: ShortCut[]) =>
  shortCuts?.map((item: ShortCut) => (
    <SideBarItemWithImage
      src={item.src}
      text={item.text}
      className="rounded-xs"
    />
  ));

export { renderNavSideItems, renderInfoItems, renderShortCutItems };
