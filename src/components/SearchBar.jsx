import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/SearchBarStyles.css";

const SearchBar = ({ searchType }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedAgeCategory, setSelectedAgeCategory] = useState("");

  const [activity, setActivity] = useState("");
  const [participants, setParticipants] = useState("");

  const locations = ["New York", "Los Angeles", "Chicago"];
  const ageCategories = ["0-12", "13-17", "18-25", "26-35", "36-50", "51+"];
  const activities = ["Sightseeing", "Hiking", "Dining", "Shopping"];

  const handleSearch = () => {
    console.log("Search initiated with: ", {
      selectedLocation,
      checkInDate,
      checkOutDate,
      selectedAgeCategory,
      activity,
      participants,
    });
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form
            className="search-bar d-flex align-items-center justify-content-between p-3 flex-wrap"
            style={{
              backgroundColor: "#fff",
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "40px",
              width: "100%",
            }}
          >
            {searchType === "stays" ? (
              <>
                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  className="d-flex flex-column justify-content-center mb-3 mb-sm-0"
                  style={{ padding: "0 10px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-location"
                      style={{ fontWeight: "bold" }}
                    >
                      {selectedLocation || "Where"}
                    </Dropdown.Toggle>
                    <p>Destination</p>
                    <Dropdown.Menu>
                      {locations.map((location, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setSelectedLocation(location)}
                        >
                          {location}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  className="d-flex flex-column justify-content-center mb-3 mb-sm-0"
                  style={{ padding: "0 10px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-checkin"
                      style={{ fontWeight: "bold" }}
                    >
                      {checkInDate
                        ? checkInDate.toLocaleDateString()
                        : "Check in"}
                    </Dropdown.Toggle>
                    <p>Check-in Date</p>
                    <Dropdown.Menu>
                      <div className="datepicker-container">
                        <DatePicker
                          selected={checkInDate}
                          onChange={(date) => setCheckInDate(date)}
                          inline
                          placeholderText="Select Check-in"
                          dateFormat="P"
                        />
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  className="d-flex flex-column justify-content-center mb-3 mb-sm-0"
                  style={{ padding: "0 10px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-checkout"
                      style={{ fontWeight: "bold" }}
                    >
                      {checkOutDate
                        ? checkOutDate.toLocaleDateString()
                        : "Check out"}
                    </Dropdown.Toggle>
                    <p>Check-out Date</p>
                    <Dropdown.Menu>
                      <div className="datepicker-container">
                        <DatePicker
                          selected={checkOutDate}
                          onChange={(date) => setCheckOutDate(date)}
                          inline
                          placeholderText="Select Check-out"
                          dateFormat="P"
                        />
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  className="d-flex flex-column justify-content-center mb-3 mb-sm-0"
                  style={{ padding: "0 10px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-age"
                      style={{ fontWeight: "bold" }}
                    >
                      {selectedAgeCategory || "Who"}
                    </Dropdown.Toggle>
                    <p>Add Guest</p>
                    <Dropdown.Menu>
                      {ageCategories.map((age, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setSelectedAgeCategory(age)}
                        >
                          {age}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  md={2}
                  className="d-flex justify-content-center align-items-center"
                  style={{ padding: "0 10px" }}
                >
                  <Button
                    variant="danger"
                    style={{
                      borderRadius: "50%",
                      padding: "10px 15px",
                      backgroundColor: "#ff385c",
                      border: "none",
                    }}
                    onClick={handleSearch}
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
                  xs={12}
                  sm={3}
                  md={2}
                  className="d-flex flex-column justify-content-center mb-3 mb-sm-0"
                  style={{ padding: "0 10px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      className="text-center"
                      variant="none"
                      id="dropdown-activity"
                      style={{ fontWeight: "bold" }}
                    >
                      {activity || "Select Activity"}
                    </Dropdown.Toggle>
                    <p> Activity</p>
                    <Dropdown.Menu>
                      {activities.map((act, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setActivity(act)}
                        >
                          {act}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  className="d-flex flex-column justify-content-center mb-3 mb-sm-0"
                  style={{ padding: "0 10px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      className="text-center"
                      variant="none"
                      id="dropdown-participants"
                      style={{ fontWeight: "bold" }}
                    >
                      {participants || "Participants"}
                    </Dropdown.Toggle>
                    <p> Add Participants</p>
                    <Dropdown.Menu>
                      {ageCategories.map((age, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setParticipants(age)}
                        >
                          {age}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  className="d-flex flex-column justify-content-center mb-3 mb-sm-0"
                  style={{ padding: "0 10px", borderLeft: "1px solid #e0e0e0" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-date"
                      style={{ fontWeight: "bold" }}
                    >
                      {checkInDate ? checkInDate.toLocaleDateString() : "Date"}
                    </Dropdown.Toggle>
                    <p>Select Date</p>
                    <Dropdown.Menu>
                      <div className="datepicker-container">
                        <DatePicker
                          selected={checkInDate}
                          onChange={(date) => setCheckInDate(date)}
                          inline
                          placeholderText="Select Date"
                          dateFormat="P"
                        />
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  md={2}
                  className="d-flex justify-content-center align-items-center"
                  style={{ padding: "0 10px" }}
                >
                  <Button
                    variant="danger"
                    style={{
                      borderRadius: "50%",
                      padding: "10px 15px",
                      backgroundColor: "#ff385c",
                      border: "none",
                    }}
                    onClick={handleSearch}
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

      <hr style={{ borderBottom: "1px solid lightgrey", marginTop: "40px" }} />
    </Container>
  );
};

export default SearchBar;
