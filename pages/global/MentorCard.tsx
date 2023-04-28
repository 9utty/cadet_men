import React from "react";
import { Card, Grid, Divider, Image } from "antd";
import Link from "next/link";
const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Card {
  image: string;
  userNickName: string;
  description: string;
  hashtag: string[];
}

const MentorCard = (props: Card) => {
  const screens = useBreakpoint();
  const cardWidth = screens.xs ? 120 : 240;
  const hashtags = props.hashtag.slice(0, 2);
  const maxDescriptionLength = screens.xs ? 32 : 40;
  const truncatedDescription =
    props.description.length > maxDescriptionLength
      ? `${props.description.substring(0, maxDescriptionLength)}...`
      : props.description;

  return (
    <Link href="../profiles/MentorProfile">
      <Card
        hoverable
        style={{ width: cardWidth }}
        cover={
          <Image
            preview={false}
            alt="example"
            src={props.image}
            height={screens.xs ? 110 : 220}
            width={screens.xs ? 110 : 220}
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              marginLeft: screens.xs ? "5px" : "10px",
              marginTop: screens.xs ? "5px" : "10px",
            }}
          />
        }
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
            fontSize: screens.xs ? "12px" : "18px",
            color: screens.xs ? "#888" : "#888",
            marginBottom: "8px",
          }}
        >
          {truncatedDescription}
        </div>
        {hashtags.map((tag) => (
          <div
            key={tag}
            style={{
              fontSize: screens.xs ? "10px" : "15px",
              color: screens.xs ? "#222" : "#222",
            }}
          >{`#${tag}`}</div>
        ))}
      </Card>
    </Link>
  );
};

export default MentorCard;
