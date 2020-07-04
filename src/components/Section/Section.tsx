import React from "react";
import { ElementType } from "react";
import { cn } from "@bem-react/classname";
import "./Section.scss";
import Tag from "../Tag/Tag";

interface ISectionProps {
  header?: "arrow" | "flat";
  footer?: "arrow" | "flat";
  type?: "section" | "article" | "div";
  theme?: "light" | "dark";
  title?: string;
  className?: string;
  children?: React.ReactElement;
}

const cnSection = cn("Section");

export default function Section({
  header,
  footer,
  type,
  className,
  title,
  theme,
  children,
}: ISectionProps) {
  let Component: ElementType;
  Component = type || "div";

  return (
    <Component
      className={cnSection({ theme, footer, header, type }, [className])}
    >
      <Tag
        size={"m"}
        text={"just a headline"}
        type={"headline"}
        className={cnSection("headline")}
      />
      <div className={cnSection("mainContent")}>{children}</div>
    </Component>
  );
}
