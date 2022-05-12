import { NextPage } from "next";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = (props) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
