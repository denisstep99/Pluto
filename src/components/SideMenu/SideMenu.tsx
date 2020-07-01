import React from "react";
import { cn } from "@bem-react/classname";
import "./SideMenu.scss";

interface IMenuItem {
  text: string;
  link: string;

  className?: string;
}

interface ISideMenuProps {
  isOpen: boolean;
  menuItems: Array<IMenuItem>;

  onClick?(e: React.MouseEvent): void;
  className?: string;
}

const cnSideMenu = cn("SideMenu");

export default function SideMenu({
  isOpen,
  menuItems: items,
  className,
  onClick,
}: ISideMenuProps) {
  return (
    <nav
      onClick={onClick}
      className={cnSideMenu({ open: isOpen }, [className])}
    >
      <ul className={cnSideMenu("Items")}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={cnSideMenu("Link", [item.className])}
          >
            <li className={cnSideMenu("Item")}>{item.text}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
