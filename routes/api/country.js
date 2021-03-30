const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Country } = require('../../database/database');
const { isAdminUser } = require('../api/middlewares');
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    const country = await Country.findAll();
    res.json(country);
});




module.exports = router;