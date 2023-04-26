import React from "react";
import { Card, Grid } from "antd";

const { Meta } = Card;
const { useBreakpoint } = Grid;

const MentoCard = () => {
  const screens = useBreakpoint();
  const cardWidth = screens.xs ? 140 : 240;

  return (
    <Card
      hoverable
      style={{ width: cardWidth }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="gulee" />
      <Meta description="저는 보컬입니다" />
      <Meta description="#보컬" />
      <Meta description="#밴드" />
    </Card>
  );
};

export default MentoCard;
