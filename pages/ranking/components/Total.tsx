import React from "react";
import { Divider, Row, Col } from "antd";
import RankingCard from "./RankingCard";
import { FaCrown } from "react-icons/fa";

const TotalRanking = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
          <Col span={24}>
            <div style={{ position: "relative" }}>
              <RankingCard
                image={Mentors[0].image}
                userNickName={Mentors[0].userNickName}
                count={442}
              />
              <FaCrown
                style={{
                  color: "gold",
                  fontSize: "30px",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Col span={12}>
          <div style={{ position: "relative" }}>
            <RankingCard
              image={Mentors[0].image}
              userNickName={Mentors[0].userNickName}
              count={410}
            />
            <FaCrown
              style={{
                color: "silver",
                fontSize: "30px",
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />
          </div>
        </Col>
        <Col span={12}>
          <div style={{ position: "relative" }}>
            <RankingCard
              image={Mentors[0].image}
              userNickName={Mentors[0].userNickName}
              count={400}
            />
            <FaCrown
              style={{
                color: "brown",
                fontSize: "30px",
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Col span={24}>
          <div
            style={{
              fontSize: "25px",
              marginLeft: "10px",
              marginRight: "10px",
              color: "#000",
            }}
          >
            4위부터 10위까지
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TotalRanking;

const Mentors = [
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토1",
    description:
      "멘토1의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["HTML", "CSS", "JavaScript"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토2",
    description:
      "멘토2의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["Python", "Django"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토5",
    description:
      "멘토1의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["HTML", "CSS", "JavaScript"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토6",
    description:
      "멘토2의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["Python", "Django"],
  },
];
