import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import '../css/NavbarStyles.css';

function TopNavbar() {
  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Row className="w-100 align-items-center g-3">
          {/* Logo Section */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "120px", height: "auto" }}
              />
            </Navbar.Brand>
          </Col>

      
          <Col xs={12} md={4} className="text-center">
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/" className="fw-semibold">
                Stays
              </Nav.Link>
              <Nav.Link as={Link} to="/experience" className="fw-semibold">
                Experience
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
       
            <Nav.Link href="#airbnb" className="airbnb-link fw-semibold">
              Airbnb your home
            </Nav.Link>

        
            <div className="d-flex align-items-center" style={{ cursor: "pointer", padding: "8px" }}>
              <i className="bi bi-globe fs-5"></i>
            </div>

         
            <div className="d-flex align-items-center border rounded-pill p-1" style={{ gap: "10px", width: "110px", height: "50px" }}>
              <NavDropdown
                title={<i className="bi bi-list dropdown-icon"></i>}
                id="profile-dropdown"
                align="end"
              >
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
              <i className="bi bi-person-circle fs-4"></i>
            </div>

     
            <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
              <i className="bi bi-cart4 fs-4" style={{ color: "#FF5A60" }}></i>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
