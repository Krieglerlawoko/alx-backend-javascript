const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let stub, spy;

    beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        stub.restore();
        spy.restore();
    });

    it('should stub Utils.calculateNumber and log the correct total', () => {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20);
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 10');
    });
});
