import React from "react";

import Section from "./Section";
import Card from "../Card/Card";
import { cardData } from "../../App";

export default {
  component: Section,
  title: "Section",

  excludeStories: /.*Data$/,
};

export const ThemeDark = () => (
  <div style={{ width: "410px", margin: "0 auto" }}>
    <Section theme={"dark"} footer={"arrow"} title={"just a component"}>
      <>
        <Card
          {...cardData}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
        <Card
          {...cardData}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
        <Card
          {...cardData}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
      </>
    </Section>
  </div>
);

export const ThemeLight = () => (
  <div style={{ width: "410px", margin: "0 auto" }}>
    <Section theme={"light"} footer={"arrow"} title={"just a component"}>
      <>
        <Card
          {...cardData}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
        <Card
          {...cardData}
          description={
            "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
            "приготовлении, очень полезны и питательны. "
          }
        />
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
  </div>
);
