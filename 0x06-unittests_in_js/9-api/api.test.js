const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
    const baseUrl = 'http://localhost:7865';

    it('should return status 200 and correct message when id is a number', (done) => {
        request(`${baseUrl}/cart/12`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status 404 when id is not a number', (done) => {
        request(`${baseUrl}/cart/hello`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
