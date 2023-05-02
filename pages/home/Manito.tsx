import React, { useState, useEffect } from "react";
import AppLayout from "../global/AppLayout";
import MentorCard from "../global/MentorCard";
import { Row, Col, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import HomeEnroll from "./components/Enroll";

export default function Manito() {
  const [cards, setCards] = useState(Array.from({ length: 12 }, (_, i) => i)); // 초기 데이터

  const fetchMoreData = () => {
    // 추가 데이터 불러오기
    setCards([
      ...cards,
      ...Array.from({ length: 12 }, (_, i) => i + cards.length),
    ]);
  };

  return (
    <AppLayout>
      <InfiniteScroll
        dataLength={cards.length}
        next={fetchMoreData}
        hasMore={true} // 추가 데이터가 더 있는 경우
        loader={
          <div
            className="example"
            style={{ verticalAlign: "middle", alignContent: "center" }}
          >
            <Spin />
          </div>
        }
      >
        <HomeEnroll />
        <Row gutter={[16, 16]}>
          {cards.map((card) => (
            <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={card}>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <MentorCard
                  image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  userNickName="gulee"
                  description="42Manito 프론트엔드 개발자입니다. 그리고 Rush03에서 보컬을 하고 있습니다."
                  hashtag={["Frontend", "Vocal"]}
                />
              </div>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </AppLayout>
  );
}
