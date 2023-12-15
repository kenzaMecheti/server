const mongoose = require("mongoose")

// Créer le schema pour la  messagerie instantanée
const messageSchema = mongoose.Schema({

    //Identifiant de l'utilisateur qui envoie le message
    sender_id: { 
      type: String
    },
    // sender_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Umaster-project', // Assurez-vous de remplacer 'User' par le modèle correspondant si nécessaire
    //   },

    // Identifiant de l'utilisateur qui reçoit le message
    receiver_id: { 
        type: String,  
    },  
    // receiver_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'master-project', // Assurez-vous de remplacer 'User' par le modèle correspondant si nécessaire
    //   },

    // Date d'envoi du message instantané
    sending_date: { 
        type: Date, 
        default: Date.now
    },

    message : String,
    // Date de reception du message
    reception_date: Date,

    // Tester si le message est lut ou pas
    read: { 
        type: Boolean, 
        default: false
    },
    
    // Si le message est supprimé
    deleted: { 
        type: Boolean, 
        default: false
    }
})

// Exporter le module Message
module.exports = mongoose.model("Message", messageSchema)

// const mongoose = require("mongoose");

// // Schema for instant messaging
// const messageSchema = mongoose.Schema({
//     sender_id: {
//         type: String,
//     },

//     receiver_id: {
//         type: String,
//     },
    
//     sending_date: {
//         type: Date,
//         default: Date.now,
//     },
//     message: {
//         type: String,
//     },
//     reception_date: {
//         type: Date,
//     },
//     read: {
//         type: Boolean,
//         default: false,
//     },
//     deleted: {
//         type: Boolean,
//         default: false,
//     },
//     // Additional fields for voice messages
//     is_voice_message: {
//         type: Boolean,
//         default: false,
//     },
//     voice_url: {
//         type: String,
//     },
// });

// // Export the Message model
// module.exports = mongoose.model("Message", messageSchema);