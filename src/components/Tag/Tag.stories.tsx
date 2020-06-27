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

export const l_size = () => <Tag size={"l"} {...tagData} />;
export const m_size = () => <Tag size={"m"} {...tagData} />;
export const s_size = () => <Tag size={"s"} {...tagData} />;

export const type_button = () => (
  <Tag type={"button"} size={"l"} {...tagData} />
);
export const type_headline = () => (
  <Tag type={"headline"} size={"m"} {...tagData} />
);
export const type_component = () => (
  <Tag type={"component"} size={"s"} {...tagData} />
);
