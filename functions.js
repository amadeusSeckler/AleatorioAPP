const fs = require('fs')
const { body } = require('express-validator')

module.exports = {
    getFileGames: (filePath) => {
        if(!fs.existsSync(filePath)){
            console.log(filePath + ' doesnt exist or it isnt in the specified path')
            return
        }
    
        return fs.readFileSync(filePath, 'utf-8')
                .replace(/\r?\n|\r/g, "_")
                .split('_')
    },

    validatorWriteFileGames: [body("games").not().isEmpty().withMessage("games must exist").isArray().withMessage("games must be an array")],

    writeFileGames: async (filePath, objectGames) => {
        if (!fs.existsSync(filePath)) {
            console.log(filePath + ' doesnt exist or it isnt in the specified path')
            return
        }

        const games = objectGames.games
        fs.writeFileSync(filePath, games.toString().replace(new RegExp(',', 'g'), '\n'))
    }
}
