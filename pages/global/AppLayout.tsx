import Link from "next/link";

export default function AppLayout() {
  return (
    <div>
      <div>
        <Link href="/home/Home">홈</Link>
        <Link href="/mento/Mento">멘토</Link>
        <Link href="/category/Category">카테고리</Link>
        <Link href="/search/Search">검색</Link>
      </div>
    </div>
  );
}
