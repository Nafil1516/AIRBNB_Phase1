const Listing = require('../models/Listings');

// Get All Listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
};

// Get Listing by ID
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findOne({ id: parseInt(req.params.id) });
    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch listing' });
  }
};

// Search Listings
exports.searchListings = async (req, res) => {
  const { query } = req.query;
  try {
    const listings = await Listing.find({
      title: { $regex: query, $options: 'i' }
    });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching listings' });
  }
};
// Create a new listing
exports.createListing = async (req, res) => {
  const {  image, title, host, price } = req.body;
console.log("body",req.body);
  // if ( !image  || !title || !host || !price) {
  //   return res.status(400).json({ message: 'All fields are required.' });
  // }

  try {
    const { id, image, title, host, price } = req.body;
    const newListing = new Listing({ id, image, title, host, price });
    const savedListing = await newListing.save();
    res.status(201).json({ message: 'Listing successfully created!', listing: savedListing });
  } catch (error) {
    console.error('Error details:', error); // Logs detailed error to the server console
    res.status(500).json({ 
      error: 'Error creating listing.', 
      details: error.message || 'An unexpected error occurred.' 
    });
  }
}

// Delete a listing
exports.deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);

    if (deletedListing) {
      res.json({ message: 'Listing deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Listing not found.' });
    }
  } catch (error) {
    console.error('Error deleting listing:', error);
    res.status(500).json({ error: 'Error deleting listing.' });
  }
};

