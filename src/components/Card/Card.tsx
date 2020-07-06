import React from "react";
import { cn } from "@bem-react/classname";
import "./Card.scss";
import CardIcon from "./CardIcon/CardIcon";
import Tag from "../Tag/Tag";

type TTheme = "light" | "dark";

export interface ICardProps {
  headline: string;
  creationDate: string | Date;
  icon: string;
  tags: Array<string>;
  theme?: TTheme;

  className?: string;
  author?: string;
  isFavourite?: boolean;
  description?: string;
  children?: React.ReactElement;
}

const cnCard = cn("Card");

const TagsSection = (tags: Array<string>, theme: TTheme) => (
  <div className={cnCard("tags")}>
    {" "}
    {tags.map((text, key) => (
      <Tag
        theme={theme === "light" ? "dark" : "light"}
        key={key}
        size={"s"}
        text={text}
      />
    ))}{" "}
  </div>
);

export default function Card({
  headline,
  creationDate,
  icon,
  author,
  theme = "light",
  isFavourite,
  description,
  children,
  tags,
  className,
}: ICardProps) {
  return (
    <section className={cnCard({ theme }, [className])}>
      <div className={cnCard("main")}>
        <div className={cnCard("icon")}>
          <CardIcon img={""} />
        </div>
        <div className={cnCard("content")}>
          <div className={cnCard("header")}>
            <h1>{headline}</h1>
            <time>{creationDate}</time>
          </div>
          {(author || description || children) && (
            <div className={cnCard("description")}>
              <p>{author}</p>
              <p>{description}</p>
              {children}
            </div>
          )}
          {!(author || description || children) && TagsSection(tags, theme)}
        </div>
      </div>

      {(author || description || children) && TagsSection(tags, theme)}
    </section>
  );
}
