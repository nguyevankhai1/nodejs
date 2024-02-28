const express = require('express');

const userRoute = require('./bangDia.router');

const router = express.Router();

router.use('/api/', userRoute);


module.exports = router;