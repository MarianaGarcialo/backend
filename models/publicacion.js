const mongoose = require("mongoose")

const StorageSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        enlaces: {
            type: [String]
        },
        authors:{
            type: [String]
        },
        publicado_por:{
            type: String,
            required:true,
        }


    },
    {
        timestamps: true,
        versionKey: false,
        _id: true
    }
)
module.exports = mongoose.models.publicacion || mongoose.model("publicacion", StorageSchema)