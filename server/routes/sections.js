const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const sectionController = require('../controllers/sectionController');

// GET ALL SECTIONS OF USER
router.get(
    "/:userId",
    sectionController.fetchForUser
);

// CREATE SECTION
router.post(
    "/",
    [
        body('title').trim().isLength({ min: 3 }).not().isEmpty(),
    ],
    sectionController.createSection
);

module.exports = router;