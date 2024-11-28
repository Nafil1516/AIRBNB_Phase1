const mongoose = require('mongoose');
const Listing = require('./models/Listings');
const properties = require('./data/properties.json');

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/propertiesDB';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Clear existing data
    await Listing.deleteMany();

    // Insert JSON data
    await Listing.insertMany(properties);

    console.log('Data imported successfully!');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
