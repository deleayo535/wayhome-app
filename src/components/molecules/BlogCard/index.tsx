import React from "react";
import { Card, Row } from "antd";
import { cardProps } from "./card.types";
import classes from "./card.module.css";
const { Meta } = Card;
export default function BlogCard({
  srcSet,
  src,
  alt,
  width,
  height,
  content,
  objectFit,
  title,
  containerStyle,
  className,
  onClick,
  style,
}: cardProps) {
  return (
    <div className={`${classes.cardWrap}`}>
      <Row className={`${classes.card}`} style={{ padding: "0px !important" }}>
        <Card
          // bordered={true}
          hoverable
          style={{ width: 340, padding: "0px !important" }}
          className={`${classes.cardImg}`}
        >
          <img
            alt="pics"
            src={src}
            className=""
            style={{ height: "260px", width: "340px" }}
          />
          <div className={`${classes.cardDetail}`}>
            <h2 className={`${classes.cardTitle}`}>{title}</h2>
            <p className={`${classes.cardP}`}>{content}</p>
          </div>
        </Card>
      </Row>
    </div>
  );
}
