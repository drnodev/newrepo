
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

const util = require("../utilities/")

router.get("/type/:classificationId", invController.buildByClassificationId);
router.get("/detail/:cardId", invController.buildByCardId);

module.exports = router;