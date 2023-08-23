const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/:username', userController.fetchCreateUser);

module.exports = router;