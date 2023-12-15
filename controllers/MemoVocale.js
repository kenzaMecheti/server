const MemoVocal = require("../models/MemoVocale");

const MemoVocalController = {
  // Contrôleur pour créer un nouveau mémo vocal
  startMemoVocal: async (req, res) => {
    try {
      const { sender_id, reciver_id, contenu_vocal, contentType, duree, tags } =
        req.body;

      const newMemoVocal = await MemoVocal.create({
        sender_id,
        reciver_id,
        contenu_vocal,
        contentType,
        duree,
        tags,
      });

      res.status(201).json(newMemoVocal);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la création du mémo vocal" });
    }
  },

  // Contrôleur pour récupérer tous les mémos vocaux
  getAllMemoVocals: async (req, res) => {
    try {
      const allMemoVocals = await MemoVocal.find();
      res.status(200).json(allMemoVocals);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des mémos vocaux" });
    }
  },

  // Contrôleur pour récupérer un mémo vocal par son ID
  getMemoVocalById: async (req, res) => {
    try {
      const memoVocal = await MemoVocal.findById(req.params.id);
      if (!memoVocal) {
        return res.status(404).json({ error: "Mémo vocal non trouvé" });
      }
      res.status(200).json(memoVocal);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du mémo vocal" });
    }
  },

  // Ajoutez d'autres méthodes selon vos besoins
};

module.exports = MemoVocalController;
