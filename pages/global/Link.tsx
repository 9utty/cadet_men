import { Anchor } from "antd";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: Props) => {
  return <Anchor.Link href={href} title={children} />;
};

export default Link;
