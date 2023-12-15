const express = require("express");
const multer = require("multer");
const FichierController = require("../controllers/Fichier");
const FichierRouter = express.Router();

const storage = multer.memoryStorage(); // Utilisation de memoryStorage pour stocker les fichiers en mémoire
const upload = multer({ storage: storage });

FichierRouter.post(
  "/sendFichier",
  upload.single("fichier"),
  FichierController.sendFichier
);
FichierRouter.get("/getAllFichiers", FichierController.getAllFichiers);
FichierRouter.get("/getFichier/:id", FichierController.getFichierById);

module.exports = FichierRouter;
