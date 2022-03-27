const { check } = require('express-validator');
const usersRepo = require('../../repositories/users');

module.exports = {
  requiredEmail: check('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .custom(async (email) => {
      const existingUser = await usersRepo.getOneBy({ email });
      if (existingUser) throw new Error('Email is taken');
    }),

  requiredPassword: check('password')
    .trim()
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must be between 6 and 30 characters'),

  requiredPasswordConfirmation: check('passwordConfirmation').custom(
    async (passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password)
        throw new Error('Password must match');
    }
  ),

  authenticateEmail: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must provide a valid email')
    .custom(async (email) => {
      const user = await usersRepo.getOneBy({ email });
      if (!user) throw new Error('Email not found');
    }),

  authenticatePassword: check('password')
    .trim()
    .custom(async (password, { req }) => {
      const user = await usersRepo.getOneBy({ email: req.body.email });
      if (!user) throw new Error('Invalid credentials');

      const validPassword = await usersRepo.comparePasswords(
        user.password,
        password
      );
      if (!validPassword) throw new Error('Invalid credentials');
    }),
};
