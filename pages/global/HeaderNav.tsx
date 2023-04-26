import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Input, Row, Col } from "antd";

const HeaderNav = () => {
  return (
    <div>
      <Menu
        theme="light"
        mode="horizontal"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Menu.Item style={{ flex: 1 }}>
          <Link href="/home/Manito" passHref legacyBehavior>
            <a>42Manito</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/category/Category" passHref legacyBehavior>
            <a>카테고리</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/login/Login" passHref legacyBehavior>
            <a>로그인</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Menu theme="dark" mode="horizontal" multiple={true}>
        <Menu.Item style={{ flex: 2 }}>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <style jsx>{`
        .ant-menu-horizontal {
          font-size: 18px;
        }
        .ant-menu-horizontal .ant-menu-item,
        .ant-menu-horizontal .ant-menu-submenu-title {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default HeaderNav;
