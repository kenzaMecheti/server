const mongoose = require("mongoose");
const Message = require("../models/Message");

// Permet d'envoyer un message instantané
const SendMessage = async (req, res) => {
  try {
        const msg = new Message(req.body);
        msg.save();
        res.status(200).json(msg);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un message instantané
const DeleteMessage = async (req, res) => {
  try {
    const filter = { _id: req.params.id};
    await Message.findOneAndDelete(filter)
    res.status(200).json();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Récupérer la conversation entre deux utilisateurs
const GetConversation = async (req, res) => {
  try {
    const filter = { sender_id: req.params.sender_id,
                     receiver_id: req.params.receiver_id};

    await User.findOneAndRemove(filter); 
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};


const GetAll = async (req, res) => {
  try {
    let result = await Message.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un utilisateur grâce à son identifiant de document
const GetOne = async (req, res) => {
  try {
    let filter = { _id: new mongoose.Types.ObjectId(req.params.id) };
    let result = await User.findOne(filter);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Exporter les methodes du module
module.exports = { SendMessage, DeleteMessage, GetConversation, GetOne, GetAll};

// Permet d'envoyer un message instantané
// const mongoose = require("mongoose");
// const Message = require("../models/Message");


// // Send an instant message (text or voice)
// const SendMessage = async (req, res) => {
//     try {
//         const { sender_id, receiver_id, message, voice_url, type } = req.body;

//         if (!sender_id || !receiver_id) {
//             return res.status(400).json({ message: "Sender and receiver IDs are required." });
//         }

//         if (type === "text") {
//             const textMessage = new Message({
//                 sender_id,
//                 receiver_id,
//                 message,
//             });
//             await textMessage.save();
//             res.status(200).json(textMessage);
//         } else if (type === "voice") {
//             if (!voice_url) {
//                 return res.status(400).json({ message: "Voice URL is required for voice messages." });
//             }

//             const voiceMessage = new Message({
//                 sender_id,
//                 receiver_id,
//                 is_voice_message: true,
//                 voice_url,
//             });
//             await voiceMessage.save();
//             res.status(200).json(voiceMessage);
//         } else {
//             res.status(400).json({ message: "Invalid message type." });
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };


// // Supprimer un message instantané
// const DeleteMessage = async (req, res) => {
//   try {
//     const filter = { _id: req.params.id};
//     await Message.findOneAndDelete(filter)
//     res.status(200).json();
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };


// // Récupérer la conversation entre deux utilisateurs
// const GetConversation = async (req, res) => {
//   try {
//     const filter = { sender_id: req.params.sender_id,
//                      receiver_id: req.params.receiver_id};

//     await User.findOneAndRemove(filter); 
//     res.send(result);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };


// const GetAll = async (req, res) => {
//   try {
//     let result = await Message.find();
//     res.send(result);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };


// // Récupérer un utilisateur grâce à son identifiant de document
// const GetOne = async (req, res) => {
//   try {
//     let filter = { _id: new mongoose.Types.ObjectId(req.params.id) };
//     let result = await User.findOne(filter);
//     res.send(result);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

//  // Exporter les methodes du module
//  module.exports = { SendMessage, DeleteMessage, GetConversation, GetOne, GetAll };