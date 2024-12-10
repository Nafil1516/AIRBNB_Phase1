import React, { useState, useEffect } from "react";
import { Container, Button, Table, Modal, Form, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [listings, setListings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showCreateListing, setShowCreateListing] = useState(false);
  const [listingForm, setListingForm] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    images: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [listingsResponse, bookingsResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/listings"),
          axios.get("http://localhost:5000/api/bookings"),
        ]);
        setListings(listingsResponse.data);
        setBookings(bookingsResponse.data);
      } catch (err) {
        console.error("Error fetching data", err);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id, type) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this ${type}?`
    );

    if (!confirmDelete) return;

    try {
      const url =
        type === "listing"
          ? `http://localhost:5000/api/listings/${id}`
          : `http://localhost:5000/api/bookings/${id}`;

      const response = await axios.delete(url);

      if (response.status === 200) {
        // Update state after successful deletion
        if (type === "listing") {
          setListings(listings.filter((listing) => listing._id !== id));
        } else {
          setBookings(bookings.filter((booking) => booking._id !== id));
        }

        // Optionally, provide feedback to the user
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully!`);
      } else {
        throw new Error(`Failed to delete the ${type}.`);
      }
    } catch (err) {
      console.error(`Error deleting ${type}:`, err);
      // Provide more specific error feedback to the user if possible
      setError(`Failed to delete the ${type}. Please try again.`);
    }
  };


  const handleCreateListing = async () => {
    if (!listingForm.id || !listingForm.title || !listingForm.price || !listingForm.location) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/listings/",
        listingForm
      );
      setListings([...listings, response.data.listing]);
      setShowCreateListing(false);
      setListingForm({
        id: "",
        title: "",
        description: "",
        price: "",
        images: "",
        location: "",
      });
    } catch (err) {
      console.error("Error creating listing:", err);
      setError("Failed to create listing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>Admin Panel</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      {/* Add New Listing Button */}
      <Button className="mb-4 btn btn-danger" style={{ borderRadius: '50px' }} onClick={() => setShowCreateListing(true)}>
        Add New Listing
      </Button>

      {/* Loading Indicator */}
      {loading && <Spinner animation="border" className="d-block mx-auto mb-3" />}

      {/* Create Listing Modal */}
      <Modal show={showCreateListing} onHide={() => setShowCreateListing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {["id", "title", "description", "price", "images", "location"].map(
              (field) => (
                <Form.Group controlId={`form${field}`} key={field}>
                  <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                  <Form.Control
                    type={field === "price" ? "number" : "text"}
                    as={field === "description" ? "textarea" : "input"}
                    value={listingForm[field]}
                    onChange={(e) =>
                      setListingForm({ ...listingForm, [field]: e.target.value })
                    }
                  />
                </Form.Group>
              )
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateListing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateListing}>
            Create Listing
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Listings Table */}
      <h3>Manage Listings</h3>
      {listings.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing._id}>
                <td>{listing.title}</td>
                <td>  {listing.price}</td>
                <td>{listing.location}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(listing._id, "listing")}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No listings found.</p>
      )}

      {/* Bookings Table */}
      <h3>Manage Bookings</h3>
      {bookings.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Listing</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.userId?.name || "Unknown"}</td>
                <td>{booking.listingId?.title || "Unknown"}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(booking._id, "booking")}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No bookings found.</p>
      )}
    </Container>
  );
};

export default AdminPanel;
