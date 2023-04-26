import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Input } from "antd";

const HeaderNav = () => {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item>
        <Input.Search enterButton style={{ verticalAlign: "middle" }} />
      </Menu.Item>
      <Menu.Item>
        <Link href="/home/Home" passHref legacyBehavior>
          <a>홈</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/mento/Mento" passHref legacyBehavior>
          <a>멘토</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/category/Category" passHref legacyBehavior>
          <a>카테고리</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/search/Search" passHref legacyBehavior>
          <a>검색</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/login/Login" passHref legacyBehavior>
          <a>로그인</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderNav;
