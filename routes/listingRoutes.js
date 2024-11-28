const express = require('express');
const router = express.Router();
const listingController = require('../controller/listingController'); // Adjust path as needed

// GET /api/listings - Get all listings
router.get('/', listingController.getAllListings);

// GET /api/listings/:id - Get a specific listing by ID
router.get('/:id', listingController.getListingById);

// GET /api/listings/search?query= - Search listings by query
router.get('/search', listingController.searchListings);

// POST /api/listings - Create a new listing
router.post('/', listingController.createListing);

// DELETE /api/listings/:id - Delete a listing by ID
router.delete('/:id', listingController.deleteListing);

module.exports = router;
