import React from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import Header2 from "./header2";

function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <div className="">
      {pathname === "/" ? <Header /> : <Header2 />}

      <div className="">{children}</div>
    </div>
  );
}

export default Layout;
