import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/SearchBarStyles.css";

const SearchBar = ({ searchType }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form
            className="search-bar d-flex align-items-center justify-content-between p-3"
            style={{
              backgroundColor: "#fff",
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "40px",
              height: "80px",
              width: "100%", 
            }}
          >
           
            <div
              className="logo-container d-flex align-items-center"
              style={{ marginRight: "20px" }}
            >
             
            </div>

            {/* Search Fields */}
            {searchType === "stays" ? (
              <>
                <Col
                  className="d-flex flex-column justify-content-center"
                  xs={3}
                  style={{ padding: "0 20px" }}
                >
                  <div className="hover-container">
                    <h6>Where</h6>
                    <span>Search destinations</span>
                  </div>
                </Col>

                <Col
                  className="d-flex flex-column justify-content-center"
                  xs={3}
                  style={{ padding: "0 20px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <div className="hover-container">
                    <h6>Date</h6>
                    <span>Add dates</span>
                  </div>
                </Col>

                <Col
                  className="d-flex flex-column justify-content-center"
                  xs={3}
                  style={{ padding: "0 20px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <div className="hover-container">
                    <h6>Who</h6>
                    <span>Add guests</span>
                  </div>
                </Col>

                {/* Search Button Column */}
                <Col
                  className="d-flex justify-content-center align-items-center"
                  xs={3}
                  style={{ padding: "0 20px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Button
                    variant="danger"
                    style={{
                      borderRadius: "50%",
                      padding: "10px 15px",
                      backgroundColor: "#ff385c",
                      border: "none",
                    }}
                  >
                    <i
                      className="bi bi-search"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </Button>
                </Col>
              </>
            ) : (
              <>
                <Col
                  className="d-flex flex-column justify-content-center"
                  xs={4}
                  style={{ padding: "0 20px" }}
                >
                  <div className="hover-container">
                    <h6>Activity</h6>
                    <span>Search activities</span>
                  </div>
                </Col>

                <Col
                  className="d-flex flex-column justify-content-center"
                  xs={4}
                  style={{ padding: "0 20px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <div className="hover-container">
                    <h6>Participants</h6>
                    <span>Add participants</span>
                  </div>
                </Col>

                <Col
                  className="d-flex justify-content-center align-items-center"
                  xs={4}
                  style={{ padding: "0 20px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Button
                    variant="danger"
                    style={{
                      borderRadius: "50%",
                      padding: "10px 15px",
                      backgroundColor: "#ff385c",
                      border: "none",
                    }}
                  >
                    <i
                      className="bi bi-search"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </Button>
                </Col>
              </>
            )}
          </Form>
        </Col>
      </Row>

      <hr style={{ borderBottom: "1px solid lightgrey",marginTop:'40px' }} />
    </Container>
  );
};

export default SearchBar;
