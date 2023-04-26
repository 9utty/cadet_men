import React, { useState, useEffect } from "react";
import AppLayout from "../global/AppLayout";
import MentoCard from "../global/MentoCard";
import { Row, Col, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

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
        <Row gutter={[16, 16]}>
          {cards.map((card) => (
            <Col xs={12} sm={12} md={12} lg={8} xl={6} key={card}>
              <MentoCard
                image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                userNickName="gulee"
                descripttion="42Manito 프론트엔드 개발자입니다."
                hashtag={["Frontend", "Vocal"]}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </AppLayout>
  );
}
