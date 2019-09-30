const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Experiences = require('../helpers/experiencesModel.js');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if(err) {
      res
        .status(401)
        .json({ message: "You are not logged in correctly and are without a token."})
    }
    else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

router.get('/', verifyToken, (req, res) => {
  Experiences.find()
    .then(exp => {
      res.json(exp);
    })
    .catch(err => {
      res.status(400).json({ message: err });
    })
})

router.post('/', verifyToken, (req, res) => {
  let experience = req.body;
  console.log(req.body)

  /// adds experience to the database
  Experiences.add(experience)
    .then(saved => {
      console.log(saved)

      res.status(201).json({
        experience: saved
      });
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});


module.exports = router;