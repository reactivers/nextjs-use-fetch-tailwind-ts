import { FC, PropsWithChildren } from "react";
import Body from "./Body";
import Content from "./Content";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-black">
      <Header />
      <Body>
        <Content>{children}</Content>
      </Body>
    </div>
  );
};

export default Layout;
