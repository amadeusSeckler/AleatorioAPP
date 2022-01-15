const fs = require('fs')

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

    writeFileGames: async (filePath, objectGames) => {
        if (!fs.existsSync(filePath)) {
            console.log(filePath + ' doesnt exist or it isnt in the specified path')
            return
        }

        const games = objectGames.games
        fs.writeFileSync(filePath, games.toString().replace(new RegExp(',', 'g'), '\n'))
    }
}
