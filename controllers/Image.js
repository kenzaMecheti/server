const Image = require("../models/Image");

const ImageController = {
  sendImage: async (req, res) => {
    try {
      const { sender_id, receiver_id, image, contentType, description } =
        req.body;

      const newImage = await Image.create({
        sender_id,
        receiver_id,
        image,
        contentType,
        description,
      });

      res.status(201).json(newImage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de l'image" });
    }
  },

  getAllImages: async (req, res) => {
    try {
      const allImages = await Image.find();
      res.status(200).json(allImages);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des images" });
    }
  },

  getImageById: async (req, res) => {
    try {
      const image = await Image.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ error: "Image non trouvée" });
      }
      res.status(200).json(image);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de l'image" });
    }
  },
};

module.exports = ImageController;
