const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!isNaN(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
