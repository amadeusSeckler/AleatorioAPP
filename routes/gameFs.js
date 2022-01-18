const express = require('express');
const router = express.Router();
const gameHandlers = require('../handlers/gamesFs')
const validatorResponse = require('../helpers/validator')

router.get('/', gameHandlers.getFileGames)

router.post('/', [...gameHandlers.validatorWriteFileGames, validatorResponse], gameHandlers.writeFileGames)

module.exports = router