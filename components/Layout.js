import Head from "next/head";
import NavbarMenu from "./NavbarMenu";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Document</title>
      </Head>
      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
