import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Header.css";

function CustomNavbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo (same as old design) */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/Gharzaroor.png"
            alt="GharZaroor.com Logo"
            width="150"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {token ? (
              <>
                <Nav.Link as={Link} to="/dashboard" className="nav-button">
                  Dashboard
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="nav-button">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-button">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="nav-button">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
