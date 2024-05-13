const express = require('express')
const messageRouter = express.Router();
const messageController = require('../controllers/messages.controller')
messageRouter.get('/', messageController.getMessages)
messageRouter.post('/', messageController.postMessages)

module.exports = messageRouter;
