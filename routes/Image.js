const express = require("express");
const ImageController = require("../controllers/Image");

const ImageRouter = express.Router();

ImageRouter.post("/sendImage", ImageController.sendImage);
ImageRouter.get("/getAllImages", ImageController.getAllImages);
ImageRouter.get("/getImage/:id", ImageController.getImageById);

module.exports = ImageRouter;
