const modelGame = require('../models/game')

module.exports = {
    getGames: async () => {
        try {
            return await modelGame.find()
        } catch (err) {
            console.log(err)
            console.log('Services Error')
        }
    },

    createGame: async (objectGame) => {
        try {
            await new modelGame(objectGame).save()
        } catch (err) {
            console.log(err)
            console.log('Service Error')
        }
    },

    editGame: async (id, newGame) => {
        try {
            await modelGame.findByIdAndUpdate(id, newGame)
        } catch (error) {
            console.log(err)
            console.log('Service Error')
        }
    },

    deleteGame: async (name) => {
        try {
            await modelGame.deleteOne({ name: name })
        } catch (err) {
            console.log(err)
            console.log('Service Error')
        }
    }
}