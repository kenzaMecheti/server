const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  sender_id: {
    type: String,
  },
  receiver_id: {
    type: String,
  },
  image: {
    type: Buffer, // Utiliser le type Buffer pour stocker des données binaires (l'image)
    required: true,
  },
  contentType: {
    type: String, //ajouter un champ pour le type de contenu de l'image (par exemple, image/jpeg)
    required: true,
  },
  description: {
    type: String, // pour une description de l'image
  },
  date_envoi: {
    type: Date,
    default: Date.now(),
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
