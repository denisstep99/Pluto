import React from "react";

import Card, { ICardProps } from "./Card";

export default {
  component: Card,
  title: "Card",

  excludeStories: /.*Data$/,
};

export const cardData: ICardProps = {
  headline: "Хлопья с молоком",
  icon: "",
  creationDate: "вчера, 19.00",
  tags: ["сахар", "соль", "молоко"],
};

export const WithoutDescription = () => <Card {...cardData} />;
export const WithDescription = () => (
  <Card
    {...cardData}
    author={"Vladimir Volkov"}
    description={
      "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
      "приготовлении, очень полезны и питательны. "
    }
  />
);

export const ThemeDark = () => (
  <Card
    {...cardData}
    theme={"dark"}
    author={"Vladimir Volkov"}
    description={
      "Вкусные хлопья с молоком на завтрак. Довольно таки легки в\n" +
      "приготовлении, очень полезны и питательны. "
    }
  />
);

export const WithBody = () => (
  <Card {...cardData}>
    <ul style={{ listStyle: "none" }}>
      <h3>состав: </h3>
      <li>морковь 12гр</li>
      <li>морковь 12гр</li>
      <li>морковь 12гр</li>
    </ul>
  </Card>
);
