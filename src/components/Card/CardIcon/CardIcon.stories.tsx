import React from "react";

import CardIcon from "./CardIcon";

export default {
  component: CardIcon,
  title: "CardIcon",

  excludeStories: /.*Data$/,
};

export const cardIcon = () => <CardIcon img={""} />;
