const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Regex validation for numeric IDs
app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});

module.exports = app;
