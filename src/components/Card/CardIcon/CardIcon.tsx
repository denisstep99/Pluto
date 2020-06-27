import React from "react";
import { cn } from "@bem-react/classname";
import "./CardIcon.scss";

interface ICardIconProps {
  img: string;

  className?: string;
  color?: string;
  size?: string;
}

const cnCardIcon = cn("CardIcon");

export default function CardIcon({
  img,
  className,
  color,
  size,
}: ICardIconProps) {
  return <div className={cnCardIcon(null, [className])} />;
}
