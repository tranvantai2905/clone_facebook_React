import Icon from "@/shared/icon";

export const navItem = [
  {
    name: "Home",
    icon: <Icon name="home" className="h-5 w-5" color="#65676B" />,
    active_icon: (
      <Icon name="home" className="relative h-5 w-5" color="#0866FF" />
    ),
    link: "/home",
  },
  {
    name: "TV", // Assuming Tv2 refers to TV
    icon: <Icon name="tv-2" className="h-5 w-5" color="#65676B" />,
    active_icon: <Icon name="tv-2" className="h-5 w-5" color="#0866FF" />,
    link: "/tv",
  },
  {
    name: "Store",
    icon: <Icon name="store" className="h-5 w-5" color="#65676B" />,
    active_icon: <Icon name="store" className="h-5 w-5" color="#0866FF" />,
    link: "/store",
  },
  {
    name: "Users",
    icon: <Icon name="user-round" className="h-5 w-5" color="#65676B" />,
    active_icon: (
      <Icon name="user-round" className="relative h-5 w-5" color="#0866FF" />
    ),
    link: "/users",
  },
  {
    name: "Games",
    icon: <Icon name="gamepad-2" className="h-5 w-5" color="#65676B" />,
    active_icon: <Icon name="gamepad-2" className="h-5 w-5" color="#0866FF" />,
    link: "/games",
  },
];
