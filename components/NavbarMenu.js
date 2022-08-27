import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My next App</Navbar.Brand>
      <Nav>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
        <Link href="/jokes/random" passHref>
          <Nav.Link>Jokes</Nav.Link>
        </Link>
        <Link href="/books" passHref>
          <Nav.Link>Books</Nav.Link>
        </Link>
        <Link href="/posts" passHref>
          <Nav.Link>Post</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
