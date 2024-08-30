const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const adoptedPetController = require('../controllers/adoptedPetController');
const auth = require('../middleware/auth');

router.post(
  '/',
  [
    auth,
    [
      check('type', 'Type is required').not().isEmpty(),
      check('name', 'Name is required').not().isEmpty(),
      check('breed', 'Breed is required').not().isEmpty(),
      check('age', 'Age is required').isNumeric(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    adoptedPetController.createAdoptedPet(req, res);
  }
);

router.get('/', adoptedPetController.getAdoptedPets);

module.exports = router;
