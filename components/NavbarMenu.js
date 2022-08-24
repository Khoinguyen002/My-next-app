import { Navbar, Nav } from "react-bootstrap";

export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My next App</Navbar.Brand>
      <Nav>
        <Nav.Link>About</Nav.Link>
        <Nav.Link>Post</Nav.Link>
      </Nav>
    </Navbar>
  );
}
