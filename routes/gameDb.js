const express = require('express');
const router = express.Router();
const handlerGameDb = require('../handlers/gameDb')
const validatorResponse = require('../helpers/validator')


router.get('/', handlerGameDb.getGamesDb)

router.put('/:idGame', [...handlerGameDb.validateEditGame, validatorResponse], handlerGameDb.editGameDb)

router.post('/', [...handlerGameDb.validateGameCreate, validatorResponse], handlerGameDb.createGameDb)

router.delete('/:idGame', handlerGameDb.deleteGameDb)

module.exports = router