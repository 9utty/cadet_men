import React from "react";
import { Layout, theme, Row, Col, Input } from "antd";
import HeaderNav from "./HeaderNav";

const { Header, Content, Footer } = Layout;

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Row>
        <Col xs={24} md={8}>
          <Layout className="layout" style={{ backgroundColor: "white" }}>
            <HeaderNav />
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              <div
                className="site-layout-content"
                style={{ background: colorBgContainer }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>42Manito ©2023</Footer>
          </Layout>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
