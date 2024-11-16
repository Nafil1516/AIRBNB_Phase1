const properties = require('../data/properties.json');


exports.getAllListings = (req, res) => {
  res.json(properties);
};


exports.getListingById = (req, res) => {
  const listingId = parseInt(req.params.id);
  const property = properties.find((p) => p.id === listingId);
  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ message: 'Listing not found' });
  }
};


app.get("/api/listings/searchByTitle", async (req, res) => {
  const { query } = req.query;
  try {

    const listings = await Listing.find({
      title: { $regex: query, $options: "i" },
    });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listings by title" });
  }
});
