import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Input, Row, Col } from "antd";

const HeaderNav = () => {
  return (
    <div>
      <Row justify="start">
        <Col xs={24}>
          <Menu theme="light" mode="horizontal">
            <Menu.Item>
              <Link href="/home/Manito" passHref legacyBehavior>
                <a>42 Manito</a>
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
        </Col>
        <Col xs={24} md={5}>
          <Menu theme="dark" mode="horizontal" multiple={true}>
            <Menu.Item style={{ flex: 2 }}>
              <Input.Search enterButton style={{ verticalAlign: "middle" }} />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderNav;
