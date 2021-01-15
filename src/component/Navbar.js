import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.scss";

export default function Navigation() {
  return (
    <Navbar bg="transparant" expand="lg" fixed>
      <Navbar.Brand href="#home" style={{ color: "white" }}>
        Portfolio
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link
          className="navbarItem"
          href="#home"
          style={{ color: "white" }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          className="navbarItem"
          href="#link"
          style={{ color: "white" }}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          className="navbarItem"
          href="#link"
          style={{ color: "white" }}
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
