const mongoose = require('mongoose');

const userDb = 'adminMongo'
const passwordDb = 'passMongo'

module.exports = {
    dbConnect: async () => {
        try {
            await mongoose.connect("mongodb+srv://" + userDb + ":" + passwordDb + "@aleatorioapp.bxnvt.mongodb.net/test");
        } catch (err) {
            console.log(err)
        }
    }
}