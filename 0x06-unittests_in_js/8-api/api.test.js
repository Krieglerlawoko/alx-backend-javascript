const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
    it('should return status code 200 and the correct message', (done) => {
        request('http://localhost:7865/', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
