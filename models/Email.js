const mongoose = require("mongoose")

// Créer un schema poue les emails
const emailSchema = mongoose.Schema({

    // Email d'envoi du mail
    email_sender: { 
        type: String,
        required: true,
        maxLength: 100,
    },

    // Email de récéption du mail
    email_receiver: { 
        type: String,
        required: true,
        maxLength: 100
    },

    // Objet de l'email
    subject: { 
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },

    // Date d'envoi du mail
    sending_date: { 
        type: Date,
        required: true,
        default: Date.now
    },

    // Date de récéption du mail
    reception_date: { 
        type: Date,
        required: true,
        default: Date.now
    },
    
    // Contenu de l'email
    content: { 
        type: String,
        minLength: 1
    },
    
    // Copie carbone de l'émail
    cc: { 
        type: String,
        minLength: 1
    },
    
    // Pièce jointe de l'email
    attachment:{ 
        type: String,
        minLength: 1
    },
})

// Exporter l'email
module.exports = mongoose.model("Email", emailSchema)