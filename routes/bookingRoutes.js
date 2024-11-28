const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getBookings);


module.exports = router;
