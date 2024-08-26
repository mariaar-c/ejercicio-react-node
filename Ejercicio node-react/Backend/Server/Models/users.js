const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: { type: Number, require: false },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: Number, require: true }

},
    {
        collection: "users",
        timestamps: true
    }
)
const users = mongoose.model("users", usersSchema)

module.exports = users;