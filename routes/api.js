const router = require('express').Router();

const apiUserRouter = require('./api/user');
const apiRegionRouter = require('./api/region');
const apiCountryRouter = require('./api/country');
const apiCityRouter = require('./api/city');

router.use('/user', apiUserRouter);
router.use('/region', apiRegionRouter);
router.use('/country', apiCountryRouter);
router.use('/city', apiCityRouter);



module.exports = router;