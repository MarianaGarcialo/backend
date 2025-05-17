const mongoose = require("mongoose")

const StorageSchema = new mongoose.Schema(
    {
        contrasena: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        _id: true
    }
)
module.exports = mongoose.models.contrasena || mongoose.model("contrasena", StorageSchema)