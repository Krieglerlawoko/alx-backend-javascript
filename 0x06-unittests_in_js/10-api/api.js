app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', (req, res) => {
    const { userName } = req.body;
    if (userName) {
        res.send(`Welcome ${userName}`);
    } else {
        res.status(400).send('Missing userName');
    }
});
