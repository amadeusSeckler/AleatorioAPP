const modelGame = require('../models/game')

module.exports = {
    findGameWithId: async (id) => {
        try {
            return await modelGame.findById(id) ? false : true
        } catch (err) {
            console.log(err)
            console.log('Services Error')
        }
    },

    findGameWithName: async (name) => {
        try {
            return await modelGame.findOne({ name: name })
        } catch (err) {
            console.log(err)
            console.log('Services Error')
        }
    },

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

    deleteGame: async (id) => {
        try {
            await modelGame.findByIdAndRemove(id)
        } catch (err) {
            console.log(err)
            console.log('Service Error')
        }
    }
}