import React from "react";
import { action } from "@storybook/addon-actions";

import Tag from "./Tag";

export default {
  component: Tag,
  title: "Tag",

  excludeStories: /.*Data$/,
};

export const tagData = {
  text: "сахар",
  onClick: action("onClick"),
};

export const lSize = () => <Tag size={"l"} {...tagData} />;
export const mSize = () => <Tag size={"m"} {...tagData} />;
export const sSize = () => <Tag size={"s"} {...tagData} />;

export const typeButton = () => <Tag type={"button"} size={"l"} {...tagData} />;
export const typeHeadline = () => (
  <Tag type={"headline"} size={"m"} {...tagData} />
);
export const typeComponent = () => (
  <Tag type={"component"} size={"s"} {...tagData} />
);
