import { NextPage } from "next";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = (layoutProps) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen">{layoutProps.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
