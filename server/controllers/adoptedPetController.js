const AdoptedPet = require('../models/AdoptedPet');

exports.createAdoptedPet = async (req, res) => {
  const { type, name, breed, age, photos } = req.body;

  try {
    const newAdoptedPet = new AdoptedPet({
      type,
      name,
      breed,
      age,
      photos,
    });

    const adoptedPet = await newAdoptedPet.save();
    res.json(adoptedPet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAdoptedPets = async (req, res) => {
  try {
    const adoptedPets = await AdoptedPet.find();
    res.json(adoptedPets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
