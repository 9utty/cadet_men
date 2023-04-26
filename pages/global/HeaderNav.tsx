import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Input, Row, Col, Drawer, Button } from "antd";
import { FaRegUser } from "react-icons/fa";
import { HiHashtag, HiMenu } from "react-icons/hi";

const HeaderNav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Menu
        theme="light"
        mode="horizontal"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Menu.Item
          style={{ flex: 1, verticalAlign: "middle" }}
          className="header-menu-item"
          disabled
        >
          <Link href="/home/Manito" passHref legacyBehavior>
            <a style={{ display: "inline-block" }}>
              <img
                src="https://user-images.githubusercontent.com/86397600/234616707-af3756a9-c114-4b39-92ac-758c22e388f7.png"
                alt="42Manito"
                height="50"
                width="120"
              />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/category/Category" passHref legacyBehavior>
            <a style={{ display: "inline-block" }}>
              <HiHashtag style={{ fontSize: "20px" }} />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/login/Login" passHref legacyBehavior>
            <a style={{ display: "inline-block" }}>
              <FaRegUser style={{ fontSize: "20px" }} />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item onClick={showDrawer}>
          <a style={{ display: "inline-block" }}>
            <HiMenu style={{ fontSize: "20px" }} />
          </a>
        </Menu.Item>
      </Menu>
      <Drawer
        title="Menu"
        width={180}
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Menu>
          <Menu.Item>
            <Link href="/ranking/Ranking" passHref legacyBehavior>
              <a onClick={onClose}>Ranking</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
      <Menu theme="dark" mode="horizontal" multiple={true}>
        <Menu.Item style={{ flex: 2 }}>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderNav;
