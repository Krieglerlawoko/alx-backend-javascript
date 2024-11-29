const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint for root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for /cart/:id
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (/^\d+$/.test(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// Endpoint for /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint for /login
app.post('/login', (req, res) => {
  const username = req.body.userName;
  if (username) {
    res.send(`Welcome ${username}`);
  } else {
    res.status(400).send('Bad Request');
  }
});

// Start the server
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
