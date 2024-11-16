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
  const [totalPrice, setTotalPrice] = useState(0); 
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/listings/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchProperty();
  }, [id]);

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate || guestCount < 1) return 0;
    
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) return 0;

    const pricePerNight = property.price;
    return pricePerNight * diffDays * guestCount;
  };

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
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      setErrorMessage("Check-out date must be after check-in date.");
      return;
    }

    const calculatedTotal = calculateTotalPrice();
    setTotalPrice(calculatedTotal);

    const bookingData = {
      propertyId: property._id,
      checkInDate,
      checkOutDate,
      guestCount,
      totalPrice: calculatedTotal
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
        setSuccessMessage(data.message);
        setTimeout(() => navigate("/"), 2000); 
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      setErrorMessage("Error creating booking. Please try again.");
    }
  };

  if (!property) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border" role="status"></div>
      </div>
    );  
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} lg={6}>
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
              <h4 className="text-primary">{property.price} per night</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6}>
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

                <Form.Group controlId="checkOutDate" className="my-3">
                  <Form.Label>Check-out Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="guestCount">
                  <Form.Label>Number of Guests</Form.Label>
                  <Form.Control
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    min="1"
                    required
                  />
                </Form.Group>

                <Button variant="dark" type="submit" className="mt-4">
                  Confirm Booking
                </Button>
              </Form>
              {totalPrice > 0 && (
                <div className="mt-4">
                  <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                </div>
              )}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
