import React from "react";
import { Card, Grid, Divider } from "antd";

const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Card {
  image: string;
  userNickName: string;
  description: string;
  hashtag: string[];
}

const MentoCard = (props: Card) => {
  const screens = useBreakpoint();
  const cardWidth = screens.xs ? 140 : 240;
  const hashtags = props.hashtag.slice(0, 3);
  return (
    <Card
      hoverable
      style={{ width: cardWidth }}
      cover={<img alt="example" src={props.image} />}
    >
      <div
        style={{
          fontSize: screens.xs ? "15px" : "25px",
          color: screens.xs ? "#000" : "#000",
          fontWeight: "bold",
          marginBottom: "8px",
        }}
      >
        {props.userNickName}
      </div>
      <div
        style={{
          fontSize: screens.xs ? "12px" : "20px",
          color: screens.xs ? "#888" : "#888",
          marginBottom: "8px",
        }}
      >
        {props.description}
      </div>
      {hashtags.map((tag) => (
        <div
          key={tag}
          style={{
            fontSize: screens.xs ? "10px" : "18px",
            color: screens.xs ? "#222" : "#222",
          }}
        >{`#${tag}`}</div>
      ))}
    </Card>
  );
};

export default MentoCard;
