import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
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
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Form
            className="search-bar d-flex align-items-center justify-content-between flex-wrap"
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
              borderRadius: "50px",
              padding: "20px",
            }}
          >
            {searchType === "stays" ? (
              <>
                <Col xs={12} sm={6} md={2} className="px-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-location"
                      className="rounded-pill w-100 text-start px-3"
                    >
                      {selectedLocation || "Where"} <small>(Destination)</small>
                    </Dropdown.Toggle>
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

                <Col xs={12} sm={6} md={2} className="px-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-checkin"
                      className="rounded-pill w-100 text-start px-3"
                    >
                      {checkInDate
                        ? checkInDate.toLocaleDateString()
                        : "Check-in"}{" "}
                      <small>(Date)</small>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        inline
                        placeholderText="Select Check-in"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col xs={12} sm={6} md={2} className="px-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-checkout"
                      className="rounded-pill w-100 text-start px-3"
                    >
                      {checkOutDate
                        ? checkOutDate.toLocaleDateString()
                        : "Check-out"}{" "}
                      <small>(Date)</small>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        inline
                        placeholderText="Select Check-out"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col xs={12} sm={6} md={2} className="px-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-age"
                      className="rounded-pill w-100 text-start px-3"
                    >
                      {selectedAgeCategory || "Who"} <small>(Guests)</small>
                    </Dropdown.Toggle>
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

                <Col xs={12} sm={12} md={2} className="text-center">
                  <Button
                    variant="danger"
                    className="rounded-pill px-4 py-2"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search"></i> Search
                  </Button>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} sm={6} md={3} className="px-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-activity"
                      className="rounded-pill w-100 text-start px-3"
                    >
                      {activity || "Select Activity"}
                    </Dropdown.Toggle>
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

                <Col xs={12} sm={6} md={3} className="px-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-participants"
                      className="rounded-pill w-100 text-start px-3"
                    >
                      {participants || "Participants"}
                    </Dropdown.Toggle>
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

                <Col xs={12} sm={6} md={3} className="px-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-light"
                      id="dropdown-date"
                      className="rounded-pill w-100 text-start px-3"
                    >
                      {checkInDate ? checkInDate.toLocaleDateString() : "Date"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        inline
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col xs={12} sm={12} md={2} className="text-center">
                  <Button
                    variant="danger"
                    className="rounded-pill px-4 py-2"
                    onClick={handleSearch}
                  >
                    <i className="bi bi-search"></i> Search
                  </Button>
                </Col>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
