import Link from "next/link";
import { Menu } from "antd";

export default function AppLayout() {
  return (
    <div>
      <div>42Manito</div>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>
          <Link href="/home/Home">홈</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/mento/Mento">멘토</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/category/Category">카테고리</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/search/Search">검색</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
