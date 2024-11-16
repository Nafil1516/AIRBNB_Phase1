const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

const properties = require('./data/properties.json');


app.use(cors());


app.use(express.json());


app.use('/cardsimages', express.static(path.join(__dirname, 'cardsimages')));

app.get('/api/listings', (req, res) => {
    res.json(properties);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
