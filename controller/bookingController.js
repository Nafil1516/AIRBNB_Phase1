
exports.createBooking = (req, res) => {
    const { listingId, checkInDate, checkOutDate } = req.body;
    if (!listingId || !checkInDate || !checkOutDate) {
      return res.status(400).json({ message: 'All booking details are required' });
    }
    res.json({ message: 'Booking successfully created', bookingDetails: req.body });
  };
  