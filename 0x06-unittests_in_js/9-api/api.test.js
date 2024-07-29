const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const port = 7865;

describe('Cart page', () => {
  it('should return status code 200 for valid id', (done) => {
    request.get(`http://localhost:${port}/cart/12`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment
