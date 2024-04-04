import {
  Item,
  SideBarItemWithIcon,
  SideBarItemWithImage,
  SideBarItemWithUser,
} from "../shared/SideBarItem";
import Icon from "@/shared/icon";
import { page_action_list } from "./_item";
import Actions from "./Actions";

import { CustomTooltip } from "../shared/CustomTooltip";
import { OnlineUser, Page } from "./_types";
import OnlineUserItem from "./OnlineUserItem";

const renderActions = (actions: Item[]) =>
  actions.map((action) => (
    <SideBarItemWithIcon
      startIcon={<Icon name={action.icon_name} />}
      text={action.text}
      text_className="text-xs text-slate-500"
    />
  ));

const renderPage = (page: Page) => (
  <div>
    <SideBarItemWithImage src={page.src} text={page.text} />
    <div className="ml-5">{renderActions(page_action_list)}</div>
  </div>
);

const renderPages = (pages: Page[]) => {
  if (pages) {
    return (
      <div className="space-y-4 py-2">
        <div className="flex items-center justify-between">
          <h2 className="text-md z-0 px-7 font-semibold tracking-tight">
            Your Pages and profiles
          </h2>
          <Actions>
            <Icon
              name="square-arrow-out-down-left"
              color="#000"
              className="hover:text-blue-100"
            />
          </Actions>
        </div>
        <div className="max-h-[400px] px-3 py-2">
          {pages.map((page) => renderPage(page))}
        </div>
      </div>
    );
  }
};

const renderOnlineUsers = (users: OnlineUser[]) => {
  if (users) {
    return (
      <div className="space-y-4 py-2">
        <div className="flex items-center justify-between">
          <h2 className="text-md z-0 px-7 font-semibold tracking-tight">
            Contacts
          </h2>
          <div className="flex items-center gap-3">
            <CustomTooltip text="Search a name or a group">
              <Icon name="search" />
            </CustomTooltip>
            <Actions>
              <Icon
                name="square-arrow-out-down-left"
                color="#000"
                className="hover:text-blue-100"
              />
            </Actions>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-1 gap-2 px-3 py-2">
          {users.map((user) => (
            <OnlineUserItem user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export { renderPages, renderActions, renderPage, renderOnlineUsers };
