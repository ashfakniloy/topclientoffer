import Head from "next/head";
import Header from "./Header";
import { useRouter } from "next/router";
import Header2 from "./Header2";

function Layout({ title, description, keywords, children }) {
  const { pathname } = useRouter();

  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      {pathname === "/" ? <Header /> : <Header2 />}

      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Top Client Offer",
  description: "Top client offer",
  keywords: "offer, affiliate, cpa marketing",
};

export default Layout;
