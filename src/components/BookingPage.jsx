import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form, Alert } from "react-bootstrap";

const BookingPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Assuming user ID from local storage or context
  const userId = localStorage.getItem("userId");

  // Fetch property details
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/listings/${id}`);
        if (!response.ok) {
          throw new Error("Property not found");
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error retrieving property details:", error);
        setErrorMessage("Failed to load property details.");
      }
    };

    fetchProperty();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!checkInDate || !checkOutDate || guestCount < 1) {
      setErrorMessage("Please fill in all fields correctly.");
      return;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime()) || checkOut <= checkIn) {
      setErrorMessage("Invalid check-in or check-out dates.");
      return;
    }

    const bookingData = {
  
     
      checkInDate,
      checkOutDate,
      guestCount,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message || "Booking successful!");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setErrorMessage(data.message || "Failed to create booking. Please try again.");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      setErrorMessage("Error creating booking. Please try again.");
    }
  };

  if (!property) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={`http://localhost:5000/cardsimages/${property.image}`}
              alt={property.title}
              style={{ objectFit: "cover", height: "300px" }}
            />
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>{property.description}</Card.Text>
              <h4>{property.price} per Guest</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h3 className="mb-4">Book Your Stay</h3>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="checkInDate">
                  <Form.Label>Check-in Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="checkOutDate" className="mt-3">
                  <Form.Label>Check-out Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="guestCount" className="mt-3">
                  <Form.Label>Number of Guests</Form.Label>
                  <Form.Control
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    min="1"
                    required
                  />
                </Form.Group>
                <Button className="mt-4" variant="danger" style={{ borderRadius: "50px" }} type="submit">
                  Confirm Booking
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
