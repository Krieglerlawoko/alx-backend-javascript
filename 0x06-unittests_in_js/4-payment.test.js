const sinon = require('sinon');
const { expect } = require('chai');
const { calculateNumber } = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  beforeEach(() => {
    stub = sinon.stub(calculateNumber, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('should call calculateNumber with correct arguments and log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
