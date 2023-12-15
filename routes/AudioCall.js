//  Dans votre fichier de routes 
const express = require('express');
const AudioCallRouter = express.Router();
const AudioCallController = require('../controllers/AudioCallController');

AudioCallRouter.post('/startAudioCall', AudioCallController.startAudioCall);
// router.post('/startAudioCall', authController.protect, userController.startAudioCall);

module.exports = AudioCallRouter;