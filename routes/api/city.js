const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { City } = require('../../database/database');
const { isAdminUser } = require('../api/middlewares');
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    
});




module.exports = router;