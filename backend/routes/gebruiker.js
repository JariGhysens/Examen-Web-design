const express = require('express');
const { check, validationResult } = require('express-validator');
const gebruikerController = require('../controllers/GebruikerController');

const router = express.Router();

router.post('/login', [
    check('email')
], (req, res, next) => {
    console.log('req.body', req.body);
    // Als de validatie is geslaagd, wordt de controller-functie aangeroepen
    gebruikerController.loginGebruiker(req, res); // Controller function called here
});

module.exports = router;
