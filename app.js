const express = require('express')
const app = express()
const services = require('./functions')

const PORT = process.env.PORT || 3000
const filePath = 'ListaJuegos.txt'

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        res.json({ games: await services.getFileGames(filePath) })
    } catch (err) {
        res.sendStatus(500)
    }

})

app.post('/', async (req, res) => {
    try {
        console.log(req.body)
        await services.writeFileGames(filePath, req.body)
        res.send({
            success: true
        })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

})

app.listen(PORT, () => { console.log('App listening at port ' + PORT) })
