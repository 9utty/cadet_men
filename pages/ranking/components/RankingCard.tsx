import React from "react";
import { Card, Grid, Divider, Image } from "antd";
import Link from "next/link";
import MentorProfile from "@/pages/profiles/MentorProfile";
import { FaCrown } from "react-icons/fa";

const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Card {
  image: string;
  userNickName: string;
  count: number;
  rank: number;
}

const RankingCard = (props: Card) => {
  const screens = useBreakpoint();
  const cardWidth = screens.xs ? 140 : 320;
  const maxDescriptionLength = screens.xs ? 32 : 40;

  return (
    <Link href="../../../profiles/MentorProfile">
      <div>
        {" "}
        <Card
          hoverable
          style={{ width: cardWidth }}
          cover={
            <div>
              <Image
                preview={false}
                alt="example"
                src={props.image}
                height={screens.xs ? 120 : 300}
                width={screens.xs ? 120 : 300}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginLeft: screens.xs ? "10px" : "10px",
                  marginTop: screens.xs ? "10px" : "10px",
                }}
              />
              {props.rank <= 3 ? (
                <FaCrown
                  style={{
                    color:
                      props.rank === 1
                        ? "gold"
                        : props.rank === 2
                        ? "silver"
                        : "brown",
                    fontSize: "30px",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              ) : null}
            </div>
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
              fontSize: screens.xs ? "11px" : "22px",
              color: screens.xs ? "#000" : "#000",
              marginBottom: "8px",
            }}
          >
            {`멘토링 ${props.count}`}
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default RankingCard;
