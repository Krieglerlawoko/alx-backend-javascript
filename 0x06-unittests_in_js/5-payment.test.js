const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spy.restore();
    });

    it('should log "The total is: 120" for inputs 100, 20', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 120');
    });

    it('should log "The total is: 20" for inputs 10, 10', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 20');
    });
});
