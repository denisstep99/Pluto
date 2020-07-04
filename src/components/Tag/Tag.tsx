import React from "react";
import { ElementType } from "react";
import { cn } from "@bem-react/classname";
import "./Tag.scss";

interface ITagProps {
  size: "s" | "m" | "l";
  theme?: "light" | "dark";
  text: string;
  className?: string;
  type?: "component" | "headline" | "button";

  onClick?(e: React.MouseEvent): void;
}

const cnTag = cn("Tag");

export default function Tag({
  size,
  theme,
  type,
  text,
  onClick,
  className,
}: ITagProps) {
  let Component: ElementType;
  if (type === "component" || !type) {
    Component = "span";
  } else if (type === "headline") {
    Component = "h2";
  } else {
    Component = "button";
  }

  return (
    <Component
      className={cnTag({ size, type, theme }, [className])}
      onClick={onClick}
    >
      {text}
    </Component>
  );
}
