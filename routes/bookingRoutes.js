const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

// POST: Create a new booking
router.post('/', bookingController.createBooking);

// GET: Retrieve all bookings
router.get('/', bookingController.getBookings);

// DELETE: Remove a booking by ID
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
