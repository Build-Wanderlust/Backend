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

  /// adds user to the database
  Users.add(user)
    .then(saved => {

      /// creates token for the user
      const token = generateToken(saved);

      res.status(201).json({
        user: saved,
        token
      });
    })
    .catch(error => {
      console.log(error)
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
    sub: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret = process.env.JWT_SECRET || 'Wanderlust Secrets', options)
}

module.exports = router;