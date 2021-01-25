import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../logo/Tesla_logo_silver.png";

export default function Navigation({ color }) {
  return (
    <Navbar
      expand="lg"
      fixed
      style={{
        margin: "0px",

        paddingRight: "45px",
      }}
    >
      <Nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Navbar.Brand href="#home" style={{ color: color }}>
          <img src={logo} style={{ width: "6vw" }}></img>
        </Navbar.Brand>
        <div style={{ display: "flex", marginLeft: "120px" }}>
          <Nav.Link className="navbarItem navLink" as={NavLink} to="/">
            MODEL S
          </Nav.Link>
          <Nav.Link className="navbarItem navLink" as={NavLink} to="/projects">
            MODEL 3
          </Nav.Link>
          <Nav.Link className="navbarItem navLink" as={NavLink} to="/about">
            MODEL X
          </Nav.Link>
          <Nav.Link className="navbarItem navLink" as={NavLink} to="/contact">
            MODEL Y
          </Nav.Link>
          <Nav.Link className="navbarItem navLink" as={NavLink} to="/about">
            POWERWALL
          </Nav.Link>
          <Nav.Link className="navbarItem navLink" as={NavLink} to="/contact">
            OPLADEN
          </Nav.Link>
        </div>
        <div style={{ display: "flex" }}>
          <Nav.Link
            className="navbarItem navLink"
            as={NavLink}
            to="/nasa"
            style={{ color: color }}
          >
            SHOP
          </Nav.Link>
          <Nav.Link
            className="navbarItem navLink"
            as={NavLink}
            to="/animation"
            style={{ color: color }}
          >
            TESLA-ACCOUNT
          </Nav.Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          ></div>
        </div>
      </Nav>
    </Navbar>
  );
}
