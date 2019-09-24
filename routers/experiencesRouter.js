const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Experiences = require('../helpers/experiencesModel.js');
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
  Experiences.find()
    .then(exp => {
      res.json(exp);
    })
    .catch(err => {
      res.status(400).json({ message: err });
    })
})

module.exports = router;