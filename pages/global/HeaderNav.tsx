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
              <img
                src="https://user-images.githubusercontent.com/86397600/234616714-c09349ad-1d96-42d4-9fcc-b98db4bc116a.png"
                alt="카테고리"
                height="40"
                width="60"
              />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/login/Login" passHref legacyBehavior>
            <a style={{ display: "inline-block" }}>
              <img
                src="https://user-images.githubusercontent.com/86397600/234616717-0d52abfe-7e21-41e1-872e-b044fcdde305.png"
                alt="로그인"
                height="40"
                width="47"
              />
            </a>
          </Link>
        </Menu.Item>
      </Menu>
      <Menu theme="dark" mode="horizontal" multiple={true}>
        <Menu.Item style={{ flex: 2 }}>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderNav;
