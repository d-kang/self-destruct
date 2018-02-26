const mongoose = require('mongoose');

const Message = mongoose.model('Message');

exports.loadMessages = socket => {
  Message.find({}, (err, data) => {
    if (err) {
      console.error('err', err);
    }
  })
    .sort({ createdAt: 1 })
    .then(data => {
      socket.emit('load messages', data);
    })
    .catch(err => {
      console.error('err', err);
      socket.broadcast.emit('load messages', {
        error: { errorMessage: 'There was an error loading the messages' },
      });
    });
};

exports.deleteMessage = (data, socket) => {
  Message.findOneAndRemove(data)
    .then(message => {
      exports.updateMessages(message, socket);
    })
    .catch(e => console.error(e));
};

exports.addMessage = (message, socket) => {
  const msg = new Message(message);
  msg
    .save()
    .then(res => {
      if (res.selfDestruct === true) {
        const timeTillDestruct = res.destructAt - Date.now();
        setTimeout(
          () => exports.deleteMessage({ messageId: res.messageId }, socket),
          timeTillDestruct
        );
      }
      return res;
    })
    .then(res => exports.updateMessages(res, socket))
    .catch(e => console.error('e', e));
};

exports.updateMessages = (d, socket) => {
  Message.find({}, err => {
    if (err) {
      console.error('error', err);
    }
  })
    .sort({ createdAt: 1 })
    .then(data => {
      socket.emit('load messages', data);
      socket.broadcast.emit('load messages', data);
    })
    .catch(err => {
      console.error('err', err);
      socket.broadcast.emit('load messages', {
        error: { errorMessage: 'There was an error loading the messages' },
      });
    });
};