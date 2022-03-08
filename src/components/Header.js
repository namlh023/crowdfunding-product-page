import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconCloseMenu from "../assets/images/icon-close-menu.svg";

export default function Header() {
  const [iconMenu, setIconMenu] = useState(iconHamburger);

  function changeIconMenu() {
    if (iconMenu === iconHamburger) {
      setIconMenu(iconCloseMenu);
    } else {
      setIconMenu(iconHamburger);
    }
  }

  return (
    <header className="header" id="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Crowdfunding logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-menu"
            onClick={changeIconMenu}
          >
            <img src={iconMenu} alt="" aria-hidden="true" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#">Discover</Nav.Link>
              <Nav.Link href="#">Get Started</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
