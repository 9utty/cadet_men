import React from "react";
import { Row, Col } from "antd";
import AppLayout from "../../global/AppLayout";
import MentorCard from "../../global/MentorCard";

const hobbyMentors = [
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토3",
    description:
      "멘토3의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["DIY", "인테리어", "가드닝"],
  },
  {
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    userNickName: "멘토4",
    description:
      "멘토4의 소개글입니다. 소개글입니다. 소개글입니다. 소개글입니다.",
    hashtag: ["요리", "베이킹"],
  },
];

const HobbyCategory = () => {
  return (
    <>
      <Row style={{ marginBottom: "20px" }}>
        {hobbyMentors.map((mentor, index) => (
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={6}
            key={index}
            style={{ marginTop: "20px" }}
          >
            <MentorCard
              key={index}
              image={mentor.image}
              userNickName={mentor.userNickName}
              description={mentor.description}
              hashtag={mentor.hashtag}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HobbyCategory;
