const mongoose = require('mongoose');

const userDb = 'adminMongo'
const passwordDb = 'passMongo'
const nameDb = 'aleatorioAPP'

module.exports = {
    dbConnect: async () => {
        try {
            await mongoose.connect("mongodb+srv://" + userDb + ":" + passwordDb + "@aleatorioapp.bxnvt.mongodb.net/" + nameDb);
        } catch (err) {
            console.log(err)
        }
    }
}