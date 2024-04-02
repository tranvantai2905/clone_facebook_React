import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { navItem } from "./nav_item";

const MainNavigatorGroup = () => {
  const location = useLocation();

  const renderNavigationItem = () => {
    return navItem.map((item) => (
      <NavigationMenuItem
        className={twMerge(
          navigationMenuTriggerStyle(),
          "relative h-14 w-28 cursor-pointer",
        )}
      >
        <Link to={item.link}>
          <NavigationMenuLink>
            {location.pathname === item.link ? item.active_icon : item.icon}
          </NavigationMenuLink>
        </Link>
        <hr
          className={`absolute bottom-0 left-0 right-0 border-[1px] ${location.pathname === item.link ? "border-[#0866FF]" : "border-transparent"}`}
        ></hr>
      </NavigationMenuItem>
    ));
  };
  return (
    <div className="fixed top-0 flex hidden w-full justify-center bg-white text-center md:flex">
      <NavigationMenu>
        <NavigationMenuList>{renderNavigationItem()}</NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavigatorGroup;
