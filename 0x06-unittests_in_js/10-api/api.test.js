const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const baseUrl = 'http://localhost:7865';

describe('API Endpoints', function() {
  // Test suite for the /login endpoint
  describe('POST /login', function() {
    it('should return a welcome message with username', function(done) {
      request.post({
        url: `${baseUrl}/login
