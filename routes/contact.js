const express = require('express');
const router = express.Router();
const sendMail = require('../handlers/contact')

router.post('/', sendMail)

module.exports = router