const mongoose = require("mongoose")
async function connectToMongoDB(url) {
    return (
        mongoose.connect('mongodb+srv://admin:admin@atlascluster.wnwnyrn.mongodb.net/')
            .then(() => console.log("MongoDB connected"))
            .catch((err) => console.log("Monog err:-", err))
    )
}
module.exports = connectToMongoDB