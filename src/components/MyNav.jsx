import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
class MyNav extends Component {
  render() {
    return (
      <Navbar expand="sm" className="bg-body-tertiary w-100">
        <Container fluid>
          <Navbar.Brand href="#home">BookShop</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
