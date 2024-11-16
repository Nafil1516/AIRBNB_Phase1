import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";  
import '../css/Listingdetails.css';

const ListingDetails = () => {
  const { id } = useParams();  
  const [listing, setListing] = useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/listings/${id}`);
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error("Error retreiveing listing:", error);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" />
      </div>
    );  
  }

 
  const handleGoBack = () => {
    navigate("/"); 
  };


  const handleBookNow = () => {
    navigate(`/book/${id}`);  
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} lg={7}>
          <Card>
            <Card.Img
              variant="top"
              src={`http://localhost:5000/cardsimages/${listing.image}`}
              alt={listing.title}
              style={{ objectFit: "cover", height: "400px" }}  // Adjust image size and aspect ratio
            />
          </Card>
        </Col>
        <Col md={6} lg={5}>
          <Card className="h-100">
            <Card.Body>
              <h1 className="mb-4">{listing.title}</h1>
              <p className="text-muted">Hosted by {listing.host}</p>
              <p className="mb-4">{listing.description}</p>
              <h3 className="text-dark">{listing.price} per guest</h3>
              <Button variant="dark" className="mt-4" onClick={handleBookNow}>Book Now</Button>
            </Card.Body>
          </Card>
          <Button variant="dark" className="mt-4 ml-2" onClick={handleGoBack}>Return to Home</Button>  {/* Return Back Button */}
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
