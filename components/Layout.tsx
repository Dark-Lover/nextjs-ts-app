import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface ILayout {
  children: ReactNode;
}
function Layout({ children }: ILayout) {
  return (
    <div className="bg-green-400 min-h-screen ">
      <Head>
        <title>Ecommerce Website | Houssine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-red-400 max-w-6xl m-auto">
        {/*  Header */}

        <Header />
        {/* Main content */}
        {children}

        {/* Footer */}
        <footer>Im the footer</footer>
      </div>
    </div>
  );
}
export default Layout;
