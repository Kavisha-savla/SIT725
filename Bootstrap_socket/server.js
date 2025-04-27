const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for a new fruit addition
    socket.on('newFruit', (data) => {
        console.log('New fruit added:', data);
        // Broadcast to all connected clients
        io.emit('addFruitCard', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
