const express = require('express');
const { check, validationResult } = require('express-validator');

const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express.Router();

// Pass req object as argument.
router.get('/signup', (req, res) => res.send(signupTemplate({ req })));

router.post(
  '/signup',

  check('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .custom(async (email) => {
      const existingUser = await usersRepo.getOneBy({ email });
      if (existingUser) throw new Error('Email is taken');
    }),

  check('password')
    .trim()
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must be between 6 and 30 characters'),

  check('passwordConfirmation').custom(
    async (passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password)
        throw new Error('Password must match');
    }
  ),

  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);

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

router.get('/signin', (req, res) => res.send(signinTemplate()));

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await usersRepo.getOneBy({ email });
  if (!user) return res.send('Email not found.');

  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  );
  if (!validPassword) return res.send('Invalid password.');
  req.session.userId = user.id;
  res.send('Welcome back!');
});

module.exports = router;
