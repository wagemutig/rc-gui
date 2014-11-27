var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var Browser = require('zombie');
var server = require('../../server.js');
// var socket = require('socket.io');
// var five = require('johnny-five');
// var io = require('socket.io-client');

var port = process.env.PORT || 3000 //test port

// Feature: User moves the robot using the GUI
//   In order to have a robo-gasm
//   As a proper geek
//   I want to control the movement of my node-rover remotely
// 
//   Scenario: User moves node-rover forward
//     Given I am on '/remotecontrol'
//     When I click on 'up'
//     Then 'move-forward' gets sent
// 
//   Scenario: User moves node-rover backward
//     Given I am on '/remotecontrol'
//     When I click on 'down'
//     Then 'move-backward' gets sent
// 
//   Scenario: User moves node-rover right
//     Given I am on '/remotecontrol'
//     When I click on 'right'
//     Then 'move-right' gets sent
// 
//   Scenario: User moves node-rover left
//     Given I am on '/remotecontrol'
//     When I click on 'left'
//     Then 'move-left' gets sent


describe('Browsing the RCGUI, the user', function() {
  
  var browser = null;

  before(function(done) {
    this.server = server.listen(port);
    browser = new Browser({ site: 'http://localhost:3000' });
    done();
  });

  after(function(done) {
    this.server.close(done);
  });

  it('should see a button to move forward', function(done) {
    browser.visit('/', function(error) {
      assert.ifError(error);
      browser.assert.element('#move-forward');
      done();
    });
  });

  it('should see a button to move backward', function(done) {
    browser.visit('/', function(error) {
      assert.ifError(error);
      browser.assert.element('#move-backward');
      done();
    });
  });

  it('should see a button to move right', function(done) {
    browser.visit('/', function(error) {
      assert.ifError(error);
      browser.assert.element('#move-right');
      done();
    });
  });

});
