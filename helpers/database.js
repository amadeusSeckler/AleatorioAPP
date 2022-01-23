const mongoose = require('mongoose');

const userDb = process.env.DB_USER
const passwordDb = process.env.DB_PASS
const nameDb = process.env.DB_NAME

module.exports = {
    dbConnect: async () => {
        try {
            await mongoose.connect("mongodb+srv://" + userDb + ":" + passwordDb + "@aleatorioapp.bxnvt.mongodb.net/" + nameDb);
        } catch (err) {
            console.log(err)
        }
    }
}