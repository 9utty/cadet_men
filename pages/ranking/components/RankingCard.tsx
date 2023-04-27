import React from "react";
import { Card, Grid, Divider, Image } from "antd";
import Link from "next/link";
import MentorProfile from "@/pages/profiles/MentorProfile";

const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Card {
  image: string;
  userNickName: string;
  count: number;
}

const RankingCard = (props: Card) => {
  const screens = useBreakpoint();
  const cardWidth = screens.xs ? 120 : 240;
  const maxDescriptionLength = screens.xs ? 32 : 40;
  return (
    <Link href="../../../profiles/MentorProfile">
      <Card
        hoverable
        style={{ width: cardWidth }}
        cover={
          <Image
            preview={false}
            alt="example"
            src={props.image}
            height={screens.xs ? 120 : 240}
            width={screens.xs ? 120 : 240}
            style={{ objectFit: "cover", borderRadius: "50%" }}
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
            fontSize: screens.xs ? "13px" : "22px",
            color: screens.xs ? "#000" : "#000",
            marginBottom: "8px",
          }}
        >
          {`멘토링 ${props.count}회`}
        </div>
      </Card>
    </Link>
  );
};

export default RankingCard;
