const sinon = require('sinon');
const { expect } = require('chai');
const { calculateNumber } = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with correct arguments and log the correct message', () => {
    const spy = sinon.spy(console, 'log');
    const spyCalc = sinon.spy(calculateNumber);

    sendPaymentRequestToApi(100, 20);

    expect(spyCalc.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;

    console.log.restore();
  });
});
