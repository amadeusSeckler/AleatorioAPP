const servicesGame = require('../services/gamesDb')

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

    validateExistGame: {},
    createGameDb: async (req, res) => {
        try {

            const gameObject = {
                name: req.body.name,
                url: req.body.url
            }

            await servicesGame.createGame(gameObject)

            res.json({ success: true })
        } catch (err) {
            console.log(err)
            console.log('Handler Error')
            res.sendStatus(500)
        }
    },

    deleteGameDb: async (req, res) => {
        try {
            await servicesGame.deleteGame(req.body.name)
            res.json({ success: true })
        } catch (err) {
            console.log(err)
            console.log('Handler Error')
            res.sendStatus(500)
        }
    }
}