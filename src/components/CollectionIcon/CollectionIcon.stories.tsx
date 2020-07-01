import React from "react";

import CollectionIcon from "./CollectionIcon";

export default {
  component: CollectionIcon,
  title: "CollectionIcon",

  excludeStories: /.*Data$/,
};

export const DefaultCollectionIcon = () => (
  <CollectionIcon icon={""} headline={"cахар"} />
);
