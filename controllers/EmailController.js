const mongoose = require("mongoose");
const Email = require("../models/Email");

/* Permet d'envoyer à un email */
const SendEmail = async (req, res) => {
  try {
        const email = new Email(req.body);
        email.save();
        res.status(200).json(email);
  
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* Permet de mettre à jour un email en cas de brouillon */
const UpdateEmail = async (req, res) => {
  try {
    const filter = { _id: req.params.id};
    const update = req.body
    await Email.findOneAndUpdate(filter, update);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* Permet de supprimer un Email */
const DeleteEmail = async (req, res) => {
  try {
    const filter = { _id: req.params.id};
    await Email.findOneAndRemove(filter);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* Récupérer tous les emails */
const GetAll = async (req, res) => {
  try {
    let result = await Email.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* Récupérer tous les emails d'un utilisateur */
const GetUserEmails = async (req, res) => {
  try {
    const filter = { email_receiver: req.params.email};
    let result = await Email.find(filter);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* Récupérer uns seul email en utilisant son identifiant */
const GetOne = async (req, res) => {
  try {
    let filter = { _id: req.params.id };
    console.log(req.params.id);
    let result = await Email.findOne({
      _id: new mongoose.Types.ObjectId(req.params.id),
    });
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* Exporter le module */
module.exports = { SendEmail, UpdateEmail, GetAll, GetUserEmails, GetOne, DeleteEmail };
