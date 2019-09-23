const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../helpers/usersModel.js');
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(400).json({ message: err });
    })
})

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;
  console.log(user);
  console.log(hash);

  Users.add(user)
    .then(saved => {
      const token = generateToken(saved);
      console.log(saved);
      res.status(201).json({
        user: saved
      });
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = generateToken(saved);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = router;