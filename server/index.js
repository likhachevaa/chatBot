const express = require('express');
const chatController = require('./controllers/chat');
const messageController = require('./controllers/message');
const contactController = require('./controllers/contact');
const userController = require('./controllers/user');

const app = express();

app.use(express.json());

app.post('/chats', chatController.load);
app.post('/messages', messageController.load);
app.post('/contacts', contactController.load);
app.get('/me', userController.load);


app.listen(9090, () => {
    console.log('listen port 9090...');
});