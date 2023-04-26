import React from "react";
import { Divider, Row, Col } from "antd";
import AppLayout from "../../global/AppLayout";
import MentorCard from "../../global/MentorCard";
import MenuCategory from "./MenuCategory";

const studyMentors = [
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

const StudyCategory = () => {
  return (
    <>
      <Row style={{ marginBottom: "20px" }}>
        {studyMentors.map((mentor, index) => (
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

export default StudyCategory;
