const express = require('express');
const router = express.Router();
const Diamonds = require('../models/diamondModel');

// Get all diamonds
exports.getAllDiamonds = async (req, res) => {
  try {
    const diamonds = await Diamonds.find();
    res.json(diamonds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single diamond by ID
exports.getDiamondById = async (req, res) => {
  try {
    const diamond = await Diamonds.findById(req.params.id);
    if (!diamond) {
      return res.status(404).json({ message: 'Diamond not found' });
    }
    res.json(diamond);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new diamond
exports.createDiamond = async (req, res) => {

    const diamond = new Diamonds({
      info: req.body.info,
      quality: req.body.quality,
      quantity: req.body.quantity,
      price: req.body.price,
      supplier: req.body.supplier,
      status: req.body.status,
      importdate: req.body.importdate,
      exportdate: req.body.exportdate,
    });
    try{

  // Find the user based on the email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  diamond.user = user._id; // Assign the user ID to the diamond

  const newDiamond = await diamond.save();
  res.status(201).json(newDiamond);
} catch (error) {
  res.status(400).json({ message: error.message });
};
};

// Update a diamond
exports.updateDiamond = async (req, res) => {
  try {
    const diamond = await Diamonds.findById(req.params.id);
    if (!diamond) {
      return res.status(404).json({ message: 'Diamond not found' });
    }

    if (req.body.info) {
      diamond.info = req.body.info;
    }
    if (req.body.quality) {
      diamond.quality = req.body.quality;
    }
    if (req.body.quantity) {
      diamond.quantity = req.body.quantity;
    }
    if (req.body.price) {
      diamond.price = req.body.price;
    }
    if (req.body.supplier) {
      diamond.supplier = req.body.supplier;
    }
    if (req.body.status) {
      diamond.status = req.body.status;
    }
    if (req.body.importdate) {
      diamond.importdate = req.body.importdate;
    }
    if (req.body.exportdate) {
      diamond.exportdate = req.body.exportdate;
    }

    const updatedDiamond = await diamond.save();
    res.json(updatedDiamond);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a diamond
exports.deleteDiamond = async (req, res) => {
  try {
    const diamond = await Diamonds.findById(req.params.id);
    if (!diamond) {
      return res.status(404).json({ message: 'Diamond not found' });
    }

    await diamond.remove();
    res.json({ message: 'Diamond deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
