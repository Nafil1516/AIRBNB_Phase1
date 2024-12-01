import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import '../css/NavbarStyles.css'; 

function TopNavbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      try {
        const payload = JSON.parse(atob(token.split(".")[1])); 
        if (payload.role === "admin") {
          setIsAdmin(true); 
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false); 
    setIsAdmin(false); 
    navigate("/login"); 
  };

  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Row className="w-100 align-items-center g-3">
        
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

            
              {isAdmin && (
                <Nav.Link as={Link} to="/admin" className="fw-semibold">
                  Admin Panel
                </Nav.Link>
              )}
            </Nav>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
            <Nav.Link href="#airbnb" className="airbnb-link fw-semibold">
              Airbnb your home
            </Nav.Link>

            <div className="d-flex align-items-center" style={{ cursor: "pointer", padding: "8px" }}>
              <i className="bi bi-globe fs-5"></i>
            </div>
            <div className="d-flex gap-1">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">
                    <button className="btn btn-danger" style={{ borderRadius: '50px' }}>Login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn btn-danger" style={{ borderRadius: '50px' }}>Signup</button>
                  </Link>
                </>
              ) : (
                <>
                  {isAdmin && (
                    <span className="fw-semibold text-secondary align-self-center">
                      Admin
                    </span>
                  )}
                  <button onClick={handleLogout} style={{ borderRadius: '50px' }} className="btn btn-danger">
                    Logout
                  </button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
