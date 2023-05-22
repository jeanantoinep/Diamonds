const express = require("express");

const { Router } = require("express");
const { login, register } = require("../controllers/userController.js");
const diamondController = require("../controllers/diamondController.js");


const router = express.Router();

router.post("/register", register);

router.post("/login", login);


// Get all diamonds
router.get('/diamonds', diamondController.getAllDiamonds);

// Get a single diamond
router.get('/:id', diamondController.getDiamondById);

// Create a new diamond
router.post('/newdiamond', diamondController.createDiamond);

// Update a diamond
router.patch('/:id', diamondController.updateDiamond);

// Delete a diamond
router.delete('/:id', diamondController.deleteDiamond);


module.exports = router;
