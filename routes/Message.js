const express = require('express')
const MessageController = require('../controllers/MessageController')
const MessageRouter = express.Router()

// Routes de la messagerie
MessageRouter.post('/send-message', MessageController.SendMessage)
MessageRouter.get('/', MessageController.GetAll)
MessageRouter.delete('/:id', MessageController.DeleteMessage)
MessageRouter.get('/:sender_id/:receiver_id', MessageController.GetConversation)

// Exportation du router
module.exports = MessageRouter