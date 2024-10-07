import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";

function ColorSchemesExample() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Navbar expand="lg">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={12} md={4}>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "120px", height: "auto" }}
              />
            </Navbar.Brand>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Nav className="justify-content-center">
              <Nav.Link
                href="#home"
                style={{ fontWeight: "400", fontSize: "16px" }}
              >
                {/* hello world */}
                Stays
              </Nav.Link>
              <Nav.Link
                href="#features"
                style={{ fontWeight: "400", fontSize: "16px" }}
              >
                Experience
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4}>
            <Nav
              className="justify-content-end align-items-center d-flex"
              style={{ gap: "20px" }}
            >
              <Nav.Link
                href="#features"
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Airbnb your home
                <i
                  style={{ fontSize: "1.5rem", marginLeft: "10px" }}
                  className="bi bi-globe"
                ></i>
              </Nav.Link>

              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "50px",
                  padding: "5px 10px",
                  backgroundColor: isHovered ? "#f0f0f0" : "transparent",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <NavDropdown
                  title={
                    <i
                      className="bi bi-list"
                      style={{
                        fontSize: "16px",
                        cursor: "pointer",
                        paddingRight: "10px",
                      }}
                    ></i>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="">Logout</NavDropdown.Item>
                </NavDropdown>

                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
