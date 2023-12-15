//  Dans votre fichier de routes 
const express = require('express');
const VideoCallRouter = express.Router();
const VideoCallController = require('../controllers/VideoCallController');

VideoCallRouter.post('/startVideoCall', VideoCallController.startVideoCall);

module.exports = VideoCallRouter;