const express = require('express')
const dbServices = require('./helpers/database')
const app = express()
const cors = require('cors')
const routesGamesFs = require('./routes/gameFs')
const routesGamesDb = require('./routes/gameDb')

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors())
app.use('/gamesFs', routesGamesFs)
app.use('/games', routesGamesDb)

dbServices.dbConnect().then(console.log('Database Online'))

app.listen(PORT, () => { console.log('App listening at port ' + PORT) })
