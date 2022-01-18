const express = require('express')
const dbServices = require('./database')
const app = express()
const cors = require('cors')
const routesGames = require('./routes/game')

const PORT = process.env.PORT || 3000
const filePath = 'ListaJuegos.txt'

app.use(express.json());
app.use(cors())
app.use('/games', routesGames)

dbServices.dbConnect().then(console.log('Database Online'))

app.listen(PORT, () => { console.log('App listening at port ' + PORT) })
