const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the async test is done
      })
      .catch(done); // Handle any errors that occur
  });

  it('should return error when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .catch(error => {
        expect(error).to.be.an('error');
        done(); // Indicate that the async test is done
      });
  });
});
