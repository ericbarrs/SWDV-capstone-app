import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import img1 from "../images/favicon-big.jpg";

export function NavBar() {
  return (
    <Navbar bg="warning" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=".."
            src={img1}
            width="32"
            height="32"
            className="d-inline-block align-top"
          />
          {"  "}
          Mylocalfood
        </Navbar.Brand>
        <Button variant="primary">Login</Button>
      </Container>
    </Navbar>
  );
}
