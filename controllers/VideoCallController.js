const User = require("../models/User");
const VideoCall = require("../models/VideoCall");
const catchAsync = require("../utils/catchAsync");

exports.startVideoCall = catchAsync(async (req, res, next) => {
  const fromUserId = "657b0c13197c70aa671314d0";
  //const fromUserId = req.user._id; // ID de l'utilisateur émetteur
  
  const toUserId = "657b0beb197c70aa671314ce";
  // const toUserId = req.body.id; // ID de l'utilisateur destinataire

  try {
    // Vérifiez si les ID des utilisateurs sont définis
    if (!fromUserId) {
      return res.status(404).json({
        status: "fail",
        message: "L'utilisateur émetteur n'a pas été trouvé",
      });
    }

    if (!toUserId) {
      return res.status(404).json({
        status: "fail",
        message: "L'utilisateur destinataire n'a pas été trouvé",
      });
    }

    // Recherchez les utilisateurs dans la base de données
    const fromUser = await User.findById(fromUserId);
    const toUser = await User.findById(toUserId);

    // Vérifiez si les utilisateurs existent
    if (!fromUser) {
      return res.status(404).json({
        status: "fail",
        message: "L'utilisateur émetteur n'a pas été trouvé",
      });
    }

    if (!toUser) {
      return res.status(404).json({
        status: "fail",
        message: "L'utilisateur destinataire n'a pas été trouvé",
      });
    }

    // Créez un nouvel appel vidéo
    const newVideoCall = await VideoCall.create({
      participants: [fromUserId, toUserId],
      from: fromUserId,
      to: toUserId,
      status: "Ongoing",
    });

    // Réponse réussie avec les détails de l'appel vidéo
    res.status(200).json({
      status: "success",
      data: {
        from: fromUser,
        roomID: newVideoCall._id,
        streamID: toUserId,
        userID: fromUserId,
        userName: fromUser.first_name,
      },
    });
  } catch (error) {
    // Gestion des erreurs
    console.error("Erreur dans startVideoCall :", error);
    return res.status(500).json({
      status: "error",
      message: "Erreur lors de la création de l'appel vidéo",
      error: error.message,
    });
  }
});

//getCallLogs est une fonction qui regroupe les apples dans le journal d'appel 
exports.getCallLogs = catchAsync(async (req, res, next) => {
  const user_id = req.user._id;

  const call_logs = [];

  const video_calls = await VideoCall.find({
    participants: { $all: [user_id] },
  }).populate("from to");

  for (let elm of video_calls) {
    const missed = elm.verdict !== "Accepted";
    if (elm.from._id.toString() === user_id.toString()) {
      const other_user = elm.to;

      // outgoing
      call_logs.push({
        id: elm._id,
        img: other_user.avatar,
        name: other_user.firstName,
        online: true,
        incoming: false,
        missed,
      });
    } else {
      // incoming
      const other_user = elm.from;

      // outgoing
      call_logs.push({
        id: elm._id,
        img: other_user.avatar,
        name: other_user.firstName,
        online: true,
        incoming: true, // Fix pour indiquer que c'est un appel entrant
        missed,
      });
    }
  }

  res.status(200).json({
    status: "success",
    message: "Call Logs Found successfully!",
    data: call_logs,
  });
});