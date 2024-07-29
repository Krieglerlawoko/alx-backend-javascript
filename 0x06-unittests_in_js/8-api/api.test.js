const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const port = 7865;

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get(`http://localhost:${port}`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(`http://localhost:${port}`, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
