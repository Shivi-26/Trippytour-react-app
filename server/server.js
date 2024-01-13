const express = require('express');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();

// Enable CORS for all routes
app.use(cors({ origin: 'https://trippytour-react-app.vercel.app' }));

<<<<<<< HEAD
=======
// Create an API endpoint to fetch data
>>>>>>> 3321dced5eb8c359967f3bf9b7b025d1c947c38c
app.get('/api/data', (req, res) => {
  const results = [];
  fs.createReadStream('hotel_bookings_1000.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
<<<<<<< HEAD
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
=======
>>>>>>> 3321dced5eb8c359967f3bf9b7b025d1c947c38c
      res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
