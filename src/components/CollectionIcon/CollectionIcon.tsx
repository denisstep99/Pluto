import React from "react";
import { cn } from "@bem-react/classname";
import "./CollectionIcon.scss";

interface ICollectionIconProps {
  icon: string;
  headline: string;

  className?: string;
}

const cnCollectionIcon = cn("CollectionIcon");

export default function CollectionIcon({
  icon,
  headline,
  className,
}: ICollectionIconProps) {
  return (
    <div className={cnCollectionIcon({}, [className])}>
      <div className={cnCollectionIcon("description")}>{headline}</div>
    </div>
  );
}
