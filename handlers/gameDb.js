const servicesGame = require('../services/gamesDb')
const { body, param } = require('express-validator')

const validateExistGameId = async (id) => {
    if (await servicesGame.findGameWithId(id)) {
        throw new Error("Game doesn't exist")
    }
}

const validateExistGameName = async (name) => {
    if (await servicesGame.findGameWithName(name)) {
        throw new Error("Game does exist")
    }
}

const validateBaseGame = [body("name").isString(), body("url").isString(), body("description").isString()]

module.exports =
{
    getGamesDb: async (req, res) => {
        try {
            const resObject = {
                games: await servicesGame.getGames(),
                success: true
            }

            res.json(resObject)
        } catch (err) {
            console.log(err)
            console.log('Handler Error')
            res.sendStatus(500)
        }
    },

    validateGameCreate: [body("name").custom(validateExistGameName), ...validateBaseGame],

    createGameDb: async (req, res) => {
        try {

            const gameObject = {
                name: req.body.name,
                url: req.body.url,
                description: req.body.description
            }

            await servicesGame.createGame(gameObject)

            res.json({ success: true })
        } catch (err) {
            console.log(err)
            console.log('Handler Error')
            res.sendStatus(500)
        }
    },

    validateEditGame: [param("idGame").custom(validateExistGameId), body("name").custom(validateExistGameName), ...validateBaseGame],

    editGameDb: async (req, res) => {
        try {
            const filterVoidParameters = Object.values(req.body).map(parameter => { return (parameter == '') ? undefined : parameter })

            const parametersEdit = {
                name: filterVoidParameters[0],
                url: filterVoidParameters[1],
                description: filterVoidParameters[2]
            }

            await servicesGame.editGame(req.params['idGame'], parametersEdit)

            res.json({ success: true })
        } catch (err) {
            console.log(err)
            console.log('Handler Error')
            res.sendStatus(500)
        }
    },

    deleteGameDb: async (req, res) => {
        try {
            console.log(req)
            await servicesGame.deleteGame(req.body.name)
            res.json({ success: true })
        } catch (err) {
            console.log(err)
            console.log('Handler Error')
            res.sendStatus(500)
        }
    }
}