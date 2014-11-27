var express = require('express');
var app = express();
var server = require('http').createServer(app)
var five = require('johnny-five');
var board = new five.Board();
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  

  socket.on('led-switch', function(msg, callback){

    callback = callback || function() {};

    console.log('on')
    socket.emit('led-switch', msg);
    if (board.isReady) {
      var led = new five.Led(6);
      led.on()
    };

    callback(null, "Done.");
  });

  socket.on('led-switch-off', function(){

    console.log('off')
    if(board.isReady) {
      var led = new five.Led(6);
      led.off();
    };
  });
});

var port = process.env.PORT || 3000

module.exports = server;

if (!module.parent) {
  server.listen(port, function() {
    console.log("Server listening on " + port);
  })
}

<<<<<<< HEAD
module.exports = server;
=======
>>>>>>> 346da281a93ac9841f2b93a36f00a8bc100dfcc9
