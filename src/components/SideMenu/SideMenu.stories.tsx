import React from "react";
import { useState } from "react";
import SideMenu from "./SideMenu";

export default {
  component: SideMenu,
  title: "SideMenu",
  parameters: {
    backgrounds: [
      { name: "green dark background", value: "#569363", default: true },
    ],
  },
  excludeStories: /.*Data$/,
};

export const itemsData = [
  { text: "Главная", link: "#" },
  { text: "Новости", link: "#" },
  { text: "Купоны", link: "#" },
  { text: "Списки", link: "#" },
];

export const DefaultSideMenu: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div style={{ textAlign: "center" }}>
      <SideMenu isOpen={isOpen} menuItems={itemsData} />
      <button onClick={() => setIsOpen((old) => !old)}>open</button>
    </div>
  );
};
