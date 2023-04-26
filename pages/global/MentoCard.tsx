import React from "react";
import { Card, Grid } from "antd";

const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Card {
  image: string;
  userNickName: string;
  descripttion: string;
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
      <Meta
        title={props.userNickName}
        style={{ fontSize: screens.xs ? 20 : 25 }}
      />
      <Meta description={props.descripttion} />
      {/* 최대 3개 요소까지만 출력 */}
      {hashtags.map((tag) => (
        <Meta key={tag} description={`#${tag}`} />
      ))}
    </Card>
  );
};

export default MentoCard;
