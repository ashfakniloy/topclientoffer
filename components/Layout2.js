import Head from "next/head";

function Layout2({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      {children}
    </div>
  );
}

export default Layout2;
