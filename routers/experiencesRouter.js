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

router.post('/', (req, res) => {
  let experience = req.body;

  const { title, 
          description, 
          backgroundImg, 
          location, 
          share, 
          ratings, 
          reviews, 
          faveIt
        } = experience;

  /// adds experience to the database
  Experiences.add(experience)
    .then(saved => {

      res.status(201).json({
        experience: saved
      });
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;