const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');

router.get('/', listingController.getAllListings);
router.get('/:id', listingController.getListingById);
router.get('/search', listingController.searchListings);
console.log('Listing created')
module.exports = router;
