process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var Browser = require('zombie');
var models = require('../../models');

describe('making a booking', function() {

  before(function() {
     server = http.createServer(app).listen(3000);
     browser = new Browser({ site: 'localhost:3000'});
  });

  before(function(done) {
    browser.visit('/properties/1', done);
  });

  it('visits property page', function() {
    browser.assert.success();
  });

  describe('user can book 1 night at a property', function() {

    before(function(done) {
      browser.fill('dates', '2016-09-23', done);
      browser.pressButton('Book',done);
    });

    it('can select date', function() {
      browser.assert.success();
    });
  });

  after(function(done) {
    server.close(done);
  });

});
