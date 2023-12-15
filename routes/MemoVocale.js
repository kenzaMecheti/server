const express = require("express");
const MemoVocalController = require("../controllers/MemoVocale");
const MemoVocalRouter = express.Router();

// Endpoint pour créer un nouveau mémo vocal
MemoVocalRouter.post("/startMemoVocal", MemoVocalController.startMemoVocal);

// Endpoint pour récupérer tous les mémos vocaux
MemoVocalRouter.get("/getAllMemoVocals", MemoVocalController.getAllMemoVocals);

// Endpoint pour récupérer un mémo vocal par son ID
MemoVocalRouter.get("/getMemoVocal/:id", MemoVocalController.getMemoVocalById);

module.exports = MemoVocalRouter;
