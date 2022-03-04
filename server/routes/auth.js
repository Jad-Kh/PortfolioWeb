const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require("../controllers/authController");

// REGISTER
router.post(
    '/register',
    [
        body('username').trim().not().isEmpty(),
        body('password').trim().isLength({ min: 7 }),
    ],
    authController.register
);

// LOG IN
router.post(
    '/login',
    authController.login
);

module.exports = router;