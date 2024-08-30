const mongoose = require('mongoose');

const AdoptedPetSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'other'],
  },
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String],
  },
  adoptionDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AdoptedPet', AdoptedPetSchema);
