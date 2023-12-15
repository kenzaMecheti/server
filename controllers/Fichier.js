const Fichier = require("../models/Fichier");

const FichierController = {
  sendFichier: async (req, res) => {
    try {
      const { sender_id, reciver_id, contentType, description } = req.body;
      const fichierData = {
        sender_id: req.body.sender_id,
        reciver_id: req.body.reciver_id,
        contentType: req.body.contentType,
        description: req.body.description,
        fichier: req.file.buffer, // Utilisation de req.file.buffer pour stocker les données binaires du fichier
      };

      const newFichier = await Fichier.create(fichierData);

      res.status(201).json(newFichier);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création du fichier" });
    }
  },

  getAllFichiers: async (req, res) => {
    try {
      const allFichiers = await Fichier.find();
      res.status(200).json(allFichiers);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des fichiers" });
    }
  },

  getFichierById: async (req, res) => {
    try {
      const fichier = await Fichier.findById(req.params.id);
      if (!fichier) {
        return res.status(404).json({ error: "Fichier non trouvé" });
      }
      res.status(200).json(fichier);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du fichier" });
    }
  },
};

module.exports = FichierController;
