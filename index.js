const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
});

// Export the Express API
module.exports = app;
