import React from "react";
import { cn } from "@bem-react/classname";
import "./Card.scss";
import CardIcon from "./CardIcon/CardIcon";
import Tag from "../Tag/Tag";

export interface ICardProps {
  headline: string;
  creationDate: string | Date;
  icon: string;
  tags: Array<string>;

  className?: string;
  author?: string;
  isFavourite?: boolean;
  description?: string;
}

const cnCard = cn("Card");

// todo компонент вынести tags

export default function Card({
  headline,
  creationDate,
  icon,
  author,
  isFavourite,
  description,
  tags,
  className,
}: ICardProps) {
  return (
    <section className={cnCard(null, [className])}>
      <div className={cnCard("main")}>
        <div className={cnCard("icon")}>
          <CardIcon img={""} />
        </div>
        <div className={cnCard("content")}>
          <div className={cnCard("header")}>
            <h1>{headline}</h1>
            <time>{creationDate}</time>
          </div>
          {(author || description) && (
            <div className={cnCard("description")}>
              <p>{author}</p>
              <p>{description}</p>
            </div>
          )}
          {!(author || description) && (
            <div className={cnCard("tags")}>
              {" "}
              {tags.map((text, key) => (
                <Tag key={key} size={"s"} text={text} />
              ))}{" "}
            </div>
          )}
        </div>
      </div>

      {(author || description) && (
        <div className={cnCard("tags")}>
          {" "}
          {tags.map((text, key) => (
            <Tag key={key} size={"s"} text={text} />
          ))}{" "}
        </div>
      )}
    </section>
  );
}
