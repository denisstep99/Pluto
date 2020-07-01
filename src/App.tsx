import React, { useState } from "react";
import "./App.scss";
import Card, { ICardProps } from "./components/Card/Card";
import CollectionIcon from "./components/CollectionIcon/CollectionIcon";
import SideMenu from "./components/SideMenu/SideMenu";
import { itemsData } from "./components/SideMenu/SideMenu.stories";

export const cardData: ICardProps = {
  headline: "Хлопья с молоком",
  icon: "",
  creationDate: "вчера, 19.00",
  tags: ["сахар", "соль", "молоко"],
};

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="App" onClick={() => setIsOpen((old) => !old)}>
      <header className="App-header">
        <Card
          {...cardData}
          author={"Vladimir Volkov"}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
        <Card {...cardData} />
        <Card
          {...cardData}
          author={"Vladimir Volkov"}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
        <Card {...cardData} author={"Vladimir Volkov"} />
        <Card
          {...cardData}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "316px",
            marginBottom: "14px",
          }}
        >
          <CollectionIcon icon={""} headline={"hello"} />
          <CollectionIcon icon={""} headline={"hello"} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "316px",
            marginBottom: "14px",
          }}
        >
          <CollectionIcon icon={""} headline={"hello"} />
          <CollectionIcon icon={""} headline={"hello"} />
        </div>
        <Card {...cardData} author={"Vladimir Volkov"} />
        <Card
          {...cardData}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
      </header>
      <SideMenu
        onClick={(e) => e.stopPropagation()}
        isOpen={isOpen}
        menuItems={itemsData}
      />
    </div>
  );
}

export default App;
