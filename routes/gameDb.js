const express = require('express');
const router = express.Router();
const handlerGameDb = require('../handlers/gameDb')

router.get('/', handlerGameDb.getGamesDb)

router.post('/', handlerGameDb.createGameDb)

router.delete('/', handlerGameDb.deleteGameDb)

module.exports = router