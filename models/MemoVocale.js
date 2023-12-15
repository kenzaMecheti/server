const mongoose = require("mongoose");

const memoVocalSchema = new mongoose.Schema({
  sender_id: {
    type: String,
  },
  receiver_id: {
    type: String,
  },

  contenu_vocal: {
    type: Buffer, // Utilisez le type Buffer pour stocker des données binaires
    required: true,
  },
  contentType: {
    type: String, // Vous pouvez ajouter un champ pour le type de contenu (par exemple, audio/wav)
    required: true,
  },
  date_envoi: {
    type: Date,
    default: Date.now(),
  },
  duree: {
    type: Number, // La durée du mémo vocal en secondes, par exemple
    required: true,
  },
});

const MemoVocal = mongoose.model("MemoVocal", memoVocalSchema);

module.exports = MemoVocal;
