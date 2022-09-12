// const webSocketServer = require('websocket').server;
// const http = require('http');

// const server = http.createServer();
// server.listen(55455);
// const wsServer = new webSocketServer({ httpServer: server });

// wsServer.on('request', function (request) {
//     console.log('establishing a new connection with client');
//     var connection = request.accept(null, request.origin);
//     setInterval(() => {
//         connection.sendUTF(new Date().getTime())
//     }, 100);
// });

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});