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

export const LSize = () => <Tag size={"l"} {...tagData} />;
export const MSize = () => <Tag size={"m"} {...tagData} />;
export const SSize = () => <Tag size={"s"} {...tagData} />;

export const TypeButton = () => <Tag type={"button"} size={"l"} {...tagData} />;
export const TypeHeadline = () => (
  <Tag type={"headline"} size={"m"} {...tagData} />
);
export const TypeComponent = () => (
  <Tag type={"component"} size={"s"} {...tagData} />
);
