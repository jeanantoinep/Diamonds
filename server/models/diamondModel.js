const mongoose = require('mongoose');
const diamondSchema = new mongoose.Schema({
    info: { type: String, required: true, unique: true },
    quality: { type: String, required: true, unique: true },
    quantity: { type: String, required: true },
    price: { type: String, required: true },
    supplier: { type: String, required: true },
    status: { type: String, required: true },
    importdate: { type: String, required: true },
    exportdate: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
  const Diamonds = mongoose.model('Diamonds', diamondSchema);
  
  module.exports = Diamonds;
  