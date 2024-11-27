describe('Available payments', () => {
    const baseUrl = 'http://localhost:7865';

    it('should return the correct payment methods object', (done) => {
        request(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
});

describe('Login endpoint', () => {
    const baseUrl = 'http://localhost:7865';

    it('should return a welcome message with username', (done) => {
        const options = {
            url: `${baseUrl}/login`,
            method: 'POST',
            json: { userName: 'Betty' }
        };
        request(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });

    it('should return status 400 for missing userName', (done) => {
        const options = {
            url: `${baseUrl}/login`,
            method: 'POST',
            json: {}
        };
        request(options, (err, res, body) => {
            expect(res.statusCode).to.equal(400);
            expect(body).to.equal('Missing userName');
            done();
        });
    });
});
