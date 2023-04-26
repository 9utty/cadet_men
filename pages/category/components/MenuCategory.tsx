import React, { useState } from "react";
import Link from "next/link";
import { Menu, Divider } from "antd";
import Category from "../Category";
import StudyCategory from "./StudyCategory";
import HobbyCategory from "./HobbyCategory";

const MenuCategory = () => {
  const [isStudy, setIsStudy] = useState(false);
  const onStudy = () => {
    setIsStudy(true);
  };
  const onHobby = () => {
    setIsStudy(false);
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
        <Menu.Item key="study" onClick={onStudy}>
          <div
            style={{
              fontSize: "25px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            공부
          </div>
        </Menu.Item>
        <Divider type="vertical" />
        <Menu.Item key="hobby" onClick={onHobby}>
          <div
            style={{
              fontSize: "25px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            취미
          </div>
        </Menu.Item>
      </Menu>
      {isStudy ? <StudyCategory /> : <HobbyCategory />}
    </>
  );
};

export default MenuCategory;
