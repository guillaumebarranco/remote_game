const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 3000;

io.on('connection', (client) => {

	client.on('left', (data) => {
		client.broadcast.emit('left', data);
	});

	client.on('right', (data) => {
		client.broadcast.emit('right', data);
	});

	client.on('top', (data) => {
		client.broadcast.emit('top', data);
	});

	client.on('bottom', (data) => {
		client.broadcast.emit('bottom', data);
	});

	client.on('disconnect', () => {});
});

server.listen(port);
console.log(`server listening on port ${port}`);
