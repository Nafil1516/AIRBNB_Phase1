const Booking = require('../models/Booking');
// Example of booking controller functions

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings from the database
    res.json(bookings); // Return the bookings as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' }); // Handle errors
  }
};


//Post
const createBooking = async (req, res) => {
  try {
    const { checkInDate, checkOutDate, guestCount } = req.body;
console.log("REQ",req.body)
   // Validate the incoming data
    // if (!userId || !listingId || !checkInDate || !checkOutDate || !guests || !totalPrice) {
    //   return res.status(400).json({ error: 'Missing required fields' });
    // }

    const newBooking = new Booking({
      checkInDate,
      checkOutDate,
      guestCount,
    });
    console.log("newBooking",newBooking);

    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to create booking. Please try again later.",
    });
  }
};
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete booking' });
  }
};



module.exports = { getBookings, createBooking,deleteBooking };
