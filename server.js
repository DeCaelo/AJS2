// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
var collection = [];

const app = express();

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
var io = require('socket.io')(server);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

/**
*  HTTP service, AJAX request; get collection
*/
app.get('/collection', function (req, res){
  res.json(collection);
});

/**
*  add collection
*/
app.post('/collection', function (req, res){
  var item = req.body;
  collection.unshift(item);

  res.json(collection);
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

io.on('connection', function (socket) {
    console.log('connected');
    socket.emit('socket:connected');

    socket.on('collection:get', function () {
        socket.emit('collection', collection);
    });

    socket.on('collection:add', function (item) {
        collection.unshift(item);

        socket.emit('collection', collection);
    });
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`server running on localhost:${port}`))

