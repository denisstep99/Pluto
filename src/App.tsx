import React, { useState } from "react";
import "./App.scss";
import Card, { ICardProps } from "./components/Card/Card";
import CollectionIcon from "./components/CollectionIcon/CollectionIcon";
import SideMenu from "./components/SideMenu/SideMenu";
import { itemsData } from "./components/SideMenu/SideMenu.stories";
import Section from "./components/Section/Section";

export const cardData: ICardProps = {
  headline: "Хлопья с молоком",
  icon: "",
  creationDate: "вчера, 19.00",
  tags: ["сахар", "соль", "молоко"],
};

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="App" onClick={() => setIsOpen((old) => !old)}>
      <div className={"App-container"}>
        <header className="App-header">
          <Section theme={"light"} footer={"arrow"} title={"just a component"}>
            <>
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
            </>
          </Section>
          <Section theme={"dark"} footer={"arrow"} title={"just a component"}>
            <>
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
                  display: "grid",
                  alignContent: "center",
                  width: "100%",
                  marginBottom: "14px",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridColumnGap: "20px",
                  gridRowGap: "20px",
                }}
              >
                <CollectionIcon icon={""} headline={"hello"} />
                <CollectionIcon icon={""} headline={"hello"} />
                <CollectionIcon icon={""} headline={"hello"} />
                <CollectionIcon icon={""} headline={"hello"} />
              </div>
            </>
          </Section>
          <Section theme={"light"} footer={"arrow"} title={"just a component"}>
            <>
              <Card {...cardData} theme={"dark"} author={"Vladimir Volkov"} />
              <Card
                theme={"dark"}
                {...cardData}
                description={
                  "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
                  "приготовлении, очень полезны и питательны. "
                }
              />
            </>
          </Section>
        </header>
      </div>
      <SideMenu
        onClick={(e) => e.stopPropagation()}
        isOpen={isOpen}
        menuItems={itemsData}
      />
    </div>
  );
}

export default App;
