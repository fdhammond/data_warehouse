const router = require('express').Router();

const apiUserRouter = require('./api/user');
const apiRegionRouter = require('./api/region');
const apiCountryRouter = require('./api/country');
const apiCityRouter = require('./api/city');

router.use(apiUserRouter);
router.use(apiRegionRouter);
router.use(apiCountryRouter);
router.use(apiCityRouter);



module.exports = router;