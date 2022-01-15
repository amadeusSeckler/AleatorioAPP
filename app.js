const express = require('express')
const app = express()
const manipulatorFile = require('./functions')

const PORT = process.env.PORT || 3000
const filePath = 'ListaJuegos.txt'

app.get('/', (req,res)=>{
    res.json(manipulatorFile.getFileGames(filePath))
})

app.listen(port, ()=> {console.log('App listening at port ' + port)})