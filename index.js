const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes'); // Import the auth routes
const listingRoutes = require('./routes/listingRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/cardsimages', express.static(path.join(__dirname, 'cardsimages')));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/propertiesDB'; // Use env variable for Mongo URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes); // Mount auth routes under /api/auth

// Start Server
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
