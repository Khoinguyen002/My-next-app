import Head from "next/head";
import NavbarMenu from "./NavbarMenu";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children, title }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
