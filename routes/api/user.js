const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../database/database');
const { isAdminUser } = require('../api/middlewares');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');



router.get('/', async (req, res) => {
    const user = await User.findAll();
    res.json(user);
})


router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email} });
    if (user) {
        //Comparo password que viene en el body y la encriptada
        const equals = bcrypt.compareSync(req.body.password, user.password)
        if (equals) {
            //console.log(user.dataValues)
            res.json({ success: createToken(user) });
        } else {
            res.json({ error: 'Error in user or password' })
        }
    } else {
        res.json({ error: 'Error in user or password' })
    }
});


const createToken = (user) => {
    const payload = {
        usuarioId: user
    }

    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 1440 });
}

module.exports = router;