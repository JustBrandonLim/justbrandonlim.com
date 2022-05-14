import { NextPage } from "next";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

interface Layout {
  children: React.ReactNode;
}

const Layout: NextPage<Layout> = (layout) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{layout.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
