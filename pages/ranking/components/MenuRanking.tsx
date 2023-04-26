import React, { useState } from "react";
import { Menu, Divider } from "antd";

const MenuRanking = () => {
  const [isTotal, setIsTotal] = useState(true);
  const onTotal = () => {
    setIsTotal(true);
  };
  const onMonth = () => {
    setIsTotal(false);
  };
  return (
    <>
      <Menu
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menu.Item key="total" onClick={onTotal}>
          <div
            style={{
              fontSize: "25px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            Total Ranking
          </div>
        </Menu.Item>
        <Divider type="vertical" />
        <Menu.Item key="month" onClick={onMonth}>
          <div
            style={{
              fontSize: "25px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            Monthly Ranking
          </div>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuRanking;
