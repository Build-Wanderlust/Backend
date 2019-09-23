const bcrypt = require('bcryptjs');
const router = require('express').Router();

const Users = require('../helpers/usersModel.js');

router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
});

router.post('/register', (req, res) => {
    let { username, password } = req.body;
    const user = req.body;

    password = bcrypt.hash(password);

    Users.add(user)
      .then(newuser => {
        res.json(newuser)
      })
      .catch(error => {
        res.status(404).json({ message: "error" })
      })
})
  
module.exports = router;