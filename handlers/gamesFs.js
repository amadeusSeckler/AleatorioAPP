const fs = require('fs')
const { body } = require('express-validator')

const filePath = 'ListaJuegos.txt';

module.exports = {
    getFileGames: async (req, res) => {
        try {
            if (!fs.existsSync(filePath)) {
                console.log(filePath + ' doesnt exist or it isnt in the specified path')
                return
            }

            const arrayGames = fs.readFileSync(filePath, 'utf-8').replace(/\r?\n|\r/g, "_").split('_')
            res.json({
                games: arrayGames,
                success: true
            })

        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },

    validatorWriteFileGames: [body("games").not().isEmpty().withMessage("games must exist").isArray().withMessage("games must be an array")],

    writeFileGames: async (req, res) => {
        try {
            if (!fs.existsSync(filePath)) {
                console.log(filePath + ' doesnt exist or it isnt in the specified path')
                return
            }

            const games = req.body.games
            fs.writeFileSync(filePath, games.toString().replace(new RegExp(',', 'g'), '\n'))

            res.send({
                success: true
            })
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}
