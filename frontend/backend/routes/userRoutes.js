const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUserAndPet);
router.get('/consulta/:documento', userController.getUserByDocument);

module.exports = router;
