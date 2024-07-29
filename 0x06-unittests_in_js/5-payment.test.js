const sinon = require('sinon');
const { expect } = require('chai');
const { calculateNumber } = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call console.log with the correct message for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('The total is:
