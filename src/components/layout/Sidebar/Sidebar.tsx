import { useState } from "react";
import AppIcon from "../../../assets/AppIcon";
import BagIcon from "../../../assets/BagIcon";
import CategoryIcon from "../../../assets/CategoryIcon";
import ChartIcon from "../../../assets/ChartIcon";
import DiscountIcon from "../../../assets/DiscountIcon";
import GameIcon from "../../../assets/GameIcon";
import ImageIcon from "../../../assets/ImageIcon";
import MessageIcon from "../../../assets/MessageIcon";
import SettingIcon from "../../../assets/SettingIcon";
import UserIcon from "../../../assets/UserIcon";
import scss from "./sidebar.module.scss";
import { animated, useSpring } from "@react-spring/web";

interface SideBarItem {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: string;
  subItems?: string[];
}

const sideBarItems = [
  {
    name: "category",
    icon: CategoryIcon,
  },
  {
    name: "chart",
    icon: ChartIcon,
  },
  {
    name: "game",
    icon: GameIcon,
    title: "App Customization",
    subItems: ["App builder", "App Customization", "A/B Testing"],
  },
  {
    name: "bag",
    icon: BagIcon,
    title: "Store Management",
    subItems: [
      "Content Management",
      "Product Management",
      "Product Referral",
      "Shops Management",
    ],
  },
  {
    name: "user",
    icon: UserIcon,
    title: "User Management",
    subItems: [
      "Employee Management",
      "Customer Management",
      "Product Referral",
      "Partner Management",
    ],
  },
  {
    name: "message",
    icon: MessageIcon,
    title: "Communication",
    subItems: ["Chat", "Notifications"],
  },
  {
    name: "discount",
    icon: DiscountIcon,
  },
  {
    name: "image",
    icon: ImageIcon,
  },
  {
    name: "setting",
    icon: SettingIcon,
  },
];

const Sidebar = () => {
  const [selectedSidebarItem, setSelectedSidebarItem] =
    useState<SideBarItem | null>(null);

  const handleSidebarItemClick = (item: SideBarItem) => {
    setSelectedSidebarItem((prev) =>
      prev && prev.name === item.name ? null : item
    );
  };

  const styles = useSpring({
    opacity: selectedSidebarItem ? 1 : 0,
    transform: selectedSidebarItem ? "translateX(0%)" : "translateX(-100%)",
  });

  return (
    <>
      <div className={scss.sidebar}>
        <div className={scss.appIcon}>
          <AppIcon />
        </div>

        <div className={scss.sideBarItems}>
          {sideBarItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleSidebarItemClick(item)}
              className={
                item.name === selectedSidebarItem?.name ? scss.selected : ""
              }
            >
              <item.icon />
            </div>
          ))}
        </div>
      </div>
      {selectedSidebarItem && (
        <animated.div style={styles} className={scss.expandedMenu}>
          <div className={scss.expandedMenuHeading}>
            commerce <br /> flow
          </div>
          <div className={scss.expandedMenuTitle}>
            {selectedSidebarItem.title}
          </div>
          <div className={scss.expandedMenuitems}>
            {selectedSidebarItem.subItems?.map((subItem, subIndex) => (
              <div key={subIndex} className={scss.expandedMenuitem}>
                {subItem}
              </div>
            ))}
          </div>
        </animated.div>
      )}
    </>
  );
};

export default Sidebar;
