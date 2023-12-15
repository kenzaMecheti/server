const mongoose = require("mongoose");

const fichierSchema = new mongoose.Schema({
  fichier: {
    type: Buffer, // Utilisez le type Buffer pour stocker des données binaires (le fichier)
    required: true,
  },
  contentType: {
    type: String, // ajouter un champ pour le type de contenu du fichier (par exemple, application/pdf)
    required: true,
  },
  description: {
    type: String, // pour une description du fichier
  },
  date_envoi: {
    type: Date,
    default: Date.now(),
  },
});

const Fichier = mongoose.model("Fichier", fichierSchema);

module.exports = Fichier;
