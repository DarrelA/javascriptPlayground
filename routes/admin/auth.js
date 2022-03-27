const express = require('express');
const { validationResult } = require('express-validator');

const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
  requiredEmail,
  requiredPassword,
  requiredPasswordConfirmation,
  authenticateEmail,
  authenticatePassword,
} = require('./validators');

const router = express.Router();

// Pass req object as argument.
router.get('/signup', (req, res) => res.send(signupTemplate({ req })));

router.post(
  '/signup',
  requiredEmail,
  requiredPassword,
  requiredPasswordConfirmation,

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.send(signupTemplate({ req, errors }));

    const { email, password } = req.body;
    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id; // Cookie session
    res.send('Account created!');
  }
);

router.get('/signout', (req, res) => {
  req.session = null;
  res.send('You are logged out.');
});

router.get('/signin', (req, res) => res.send(signinTemplate({})));
// signinTemplate (signin.js) needs something to destructure.
// If nothing is provided, destructuring nothing will result in undefined error.
// Empty object is ok.

router.post(
  '/signin',
  authenticateEmail,
  authenticatePassword,

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.send(signinTemplate({ errors }));

    const { email } = req.body;
    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;
    res.send('Welcome back!');
  }
);

module.exports = router;
