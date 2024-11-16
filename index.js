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

app.get('/api/listings/:id', (req, res) => {
  const property = properties.find(p => p.id === parseInt(req.params.id));
  if (property) {
      res.json(property);
  } else {
      res.status(404).json({ message: ' not found' });
  }
});
app.get('/api/listings/search', (req, res) => {
  const { query } = req.query;
  const filteredProperties = properties.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredProperties);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
