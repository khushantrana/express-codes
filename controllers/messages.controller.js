const path = require('path');

function getMessages(req, res) {
    // res.sendFile(path.join(__dirname, '..', 'public'),'stockphoto-149396055-612x612.jpg');
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Khushant Rana',
    });
}

function postMessage(req, res) {
    console.log('Updating the messages');
}


module.exports = {
    getMessages,
    postMessage,
}; 