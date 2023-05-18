const express = require('express');
const router = express.Router();
const Diamonds = require('../models/Diamonds');

// Get all diamonds
router.get('/', async (req, res) => {
  try {
    const diamonds = await Diamonds.find();
    res.json(diamonds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single diamond
router.get('/:id', getDiamond, (req, res) => {
  res.json(res.diamond);
});

// Create a new diamond
router.post('/', async (req, res) => {
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

  try {
    const newDiamond = await diamond.save();
    res.status(201).json(newDiamond);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a diamond
router.patch('/:id', getDiamond, async (req, res) => {
  if (req.body.info != null) {
    res.diamond.info = req.body.info;
  }
  if (req.body.quality != null) {
    res.diamond.quality = req.body.quality;
  }
  if (req.body.quantity != null) {
    res.diamond.quantity = req.body.quantity;
  }
  if (req.body.price != null) {
    res.diamond.price = req.body.price;
  }
  if (req.body.supplier != null) {
    res.diamond.supplier = req.body.supplier;
  }
  if (req.body.status != null) {
    res.diamond.status = req.body.status;
  }
  if (req.body.importdate != null) {
    res.diamond.importdate = req.body.importdate;
  }
  if (req.body.exportdate != null) {
    res.diamond.exportdate = req.body.exportdate;
  }

  try {
    const updatedDiamond = await res.diamond.save();
    res.json(updatedDiamond);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a diamond
router.delete('/:id', getDiamond, async (req, res) => {
  try {
    await res.diamond.remove();
    res.json({ message: 'Diamond deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a diamond by ID
async function getDiamond(req, res, next) {
  let diamond;
  try {
    diamond = await Diamonds.findById(req.params.id);
    if (diamond == null) {
      return res.status(404).json({ message: 'Diamond not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.diamond = diamond;
  next();
}

module.exports = router;
