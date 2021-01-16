import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navigation({ color }) {
  return (
    <Navbar
      bg="transparant"
      expand="lg"
      fixed
      style={{ margin: "8px", marginLeft: "30px" }}
    >
      <Navbar.Brand href="#home" style={{ color: color }}>
        Portfolio
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link
          className="navbarItem"
          as={NavLink}
          to="/"
          style={{ color: color }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          className="navbarItem"
          as={NavLink}
          to="/projects"
          style={{ color: color }}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          className="navbarItem"
          as={NavLink}
          to="/about"
          style={{ color: color }}
        >
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
