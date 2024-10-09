import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import '../css/NavbarStyles.css';

function ColorSchemesExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={12} md={4}>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" style={{ width: "120px", height: "auto" }} />
            </Navbar.Brand>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/" className="nav-link">
                Stays
              </Nav.Link>
              <Nav.Link as={Link} to="/experience" className="nav-link">
                Experience
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={4}>
            <Nav className="justify-content-end align-items-center d-flex" style={{ gap: "20px" }}>
              <Nav.Link href="#airbnb" className="airbnb-link">
                Airbnb your home
              </Nav.Link>

              <div style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "8px" }}>
                <i className="bi bi-globe icon"></i>
              </div>

              <div style={{ display: "flex", gap: "5px", alignItems: "center", padding: "1px 5px", width: '105px', height: '50px', borderRadius: "50px", border: "1px solid lightgrey" }}>
                <NavDropdown title={<i className="bi bi-list dropdown-icon"></i>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="">Logout</NavDropdown.Item>
                </NavDropdown>

                <i className="bi bi-person-circle profile-icon"></i>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
